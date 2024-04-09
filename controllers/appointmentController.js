const Appointment = require("../models/appointmentModel");
const Notification = require("../models/notificationModel");
const User = require("../models/userModel");
const nodemailer=require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "pradeepvk926@gmail.com", // Your email
    pass: "wvwn ixtw bdke hzld", // Your email password
  },
});

const getallappointments = async (req, res) => {
  try {
    const keyword = req.query.search
      ? {
          $or: [{ userId: req.query.search }, { doctorId: req.query.search }],
        }
      : {};

    const appointments = await Appointment.find(keyword)
      .populate("doctorId")
      .populate("userId");
      // console.log(appointments);
    return res.send(appointments);
  } catch (error) {
    res.status(500).send("Unable to get apponintments");
  }
};

const bookappointment = async (req, res) => {
  try {
    const appointment = await Appointment({
      date: req.body.date,
      time: req.body.time,
      doctorId: req.body.doctorId,
      userId: req.locals,
    });

    const usernotification = Notification({
      userId: req.locals,
      content: `You booked an appointment with Dr. ${req.body.doctorname} for ${req.body.date} ${req.body.time}`,
    });
    await usernotification.save();
    const user = await User.findById(req.locals);

    const mailOptions = {
      from: "pradeepvk926@gmail.com", // Sender's email address
      to: user.email, // Recipient's email address
      subject: "Medi-Appoint !! Request send",
      text: `Hello, ${user.firstname} ${user.lastname} Thank you for booking a appointment your `,
      html: `<p>Hello, ${user.firstname} ${user.lastname} Thank you for booking a appointment, your request has been send to doctor and you will soon be notified once your request is accepted</p>`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    

    const doctornotification = Notification({
      userId: req.body.doctorId,
      content: `You Have a appointment reqeust from  ${user.firstname} ${user.lastname} on ${req.body.date} at ${req.body.time}`,
    });

    await doctornotification.save();

    const result = await appointment.save();
    return res.status(201).send(result);
  } catch (error) {
    console.log("error", error);
    res.status(500).send("Unable to book appointment");
  }
};

const completed = async (req, res) => {
  try {
    const alreadyFound = await Appointment.findOneAndUpdate(
      { _id: req.body.appointid },
      { status: "Completed" }
    );
    const appoint=await Appointment.findById(req.body.appointid);
    // console.log(appoint)
    const patient=await User.findById(appoint.userId);
    // console.log(req.body.doctorname);

    const usernotification = Notification({
      userId: patient._id,
      content: `Your appointment with ${req.body.doctorname} has been Accepted`,
    });
    // console.log(req.body.appointid);
    await usernotification.save();

    const mailOptions = {
      from: "pradeepvk926@gmail.com", // Sender's email address
      to: patient.email, // Recipient's email address
      subject: "Medi-Appoint !! Request Approved",
      text: `Hello, ${patient.firstname} ${patient.lastname} Thank you for booking a appointment your `,
      html: `<p>Hello, ${patient.firstname} ${patient.lastname} Thank you for booking a appointment, your request has been Aprroved  by doctor . Thank you for booking though our service. </p>`
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    
    const user = await User.findById(req.locals);
    const doctornotification = Notification({
      userId: req.body.doctorId,
      content: `You accepted appointment of ${patient.firstname} ${patient.lastname}`,
    });

    await doctornotification.save();

    return res.status(201).send("Appointment completed");
  } catch (error) {
    res.status(500).send("Unable to complete appointment");
  }
};
const reject = async (req, res) => {
  try {
    console.log("reject");
    const alreadyFound = await Appointment.findOneAndUpdate(
      { _id: req.body.appointid },
      { status: "Rejected" }
    );
    const appoint=await Appointment.findById(req.body.appointid);
    // console.log(appoint)
    const patient=await User.findById(appoint.userId);
    // console.log(req.body.doctorname);
    const usernotification = Notification({
      userId: patient._id,
      content: `Your appointment with ${req.body.doctorname} has been Rejected`,
    });

    // console.log(req.body.appointid);
    await usernotification.save();
    
    const mailOptions = {
      from: "pradeepvk926@gmail.com", // Sender's email address
      to: patient.email, // Recipient's email address
      subject: "Medi-Appoint !! Request Rejected ",
      html: `<p>Hello, ${patient.firstname} ${patient.lastname} Sorry to inform you that your request has been rejected by doctor due to his unavailability ! please try booking again at some other date. Thank you using our service </p>`
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });


    const user = await User.findById(req.locals);
    const doctornotification = Notification({
      userId: req.body.doctorId,
      content: `You Rejected appointment of ${patient.firstname} ${patient.lastname}`,
    });

    await doctornotification.save();

    return res.status(201).send("Appointment completed");
  } catch (error) {
    res.status(500).send("Unable to complete appointment");
  }
};

module.exports = {
  getallappointments,
  bookappointment,
  completed,
  reject
};
