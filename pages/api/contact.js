export default function (options, res) {
    
    
    let nodemailer = require('nodemailer')

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'pursatlyyorish2022@gmail.com',
          pass: 'yorish2022',
        },
      });

      const mailOptions = {
        from: `Sebet Contact-Us <pursatlymailer@gmail.com>`,
        to: 'pursatlyyorish2022@gmail.com',
        subject: 'Biri "Sebet" administratsiýasy bilen habarlaşmak isleýär',
        text: `ADY: `,
      };
       transporter.sendMail(mailOptions).then((data)=>{

        res.send(data);
       }).catch((err)=>{
           console.log(err);
           res.send(err);
       })

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