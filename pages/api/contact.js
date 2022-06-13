import nodemailer from "nodemailer";
export default async function (options, res) {
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "pursatlyyorish2022@gmail.com",
            pass: "bixrpzlfhruahydd",
        },
    });

    const mailOptions = {
        from: `Sebet Contact-Us <pursatlyyorish2022@gmail.com>`,
        to: "pursatlyyorish2022@gmail.com",
        subject: 'Biri "Sebet" administratsiýasy bilen habarlaşmak isleýär',
        text: `ADY: `,
    };
    try {
        await transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.log(`Error occurred. ${err.message}`);
            }
            console.log(info);
        });
        await res.status(200).json(req.body);
    } catch (error) {
        res.status(500);
    }

    // const transporter = nodemailer.createTransport({
    //   port: 465,
    //   host: "smtp.gmail.com",
    //   auth: {
    //     user: 'pursatlyyorish2022@gmail.com',
    //     pass: "yorish2022"
    //   },
    // //   secure: true,
    // })
    // const mailData = {
    //   from: 'demo email den',
    //   to: 'pursatlyyorish2022@gmail.com',
    //   subject: `Message From ${req.body.name}`,
    //   text: req.body.message + " | Sent from: " + req.body.email,
    // //   html: `<div>${req.body.message}</div><p>Sent from:
    // //   ${req.body.email}</p>`
    // }
    // transporter.sendMail(mailData, function (err, info) {
    //   if(err)
    //     console.log(err)
    //   else
    //     console.log(info)
    // })
}
