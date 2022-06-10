export default function (options, res) {
    
    
    let nodemailer = require('nodemailer')

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'pursatly***REMOVED***@gmail.com',
          pass: '***REMOVED***',
        },
      });

      const mailOptions = {
        from: `Sebet Contact-Us <pursatlymailer@gmail.com>`,
        to: 'pursatly***REMOVED***@gmail.com',
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
    //     user: 'pursatly***REMOVED***@gmail.com',
    //     pass: "***REMOVED***"
    //   },
    // //   secure: true,
    // })
    // const mailData = {
    //   from: 'demo email den',
    //   to: 'pursatly***REMOVED***@gmail.com',
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