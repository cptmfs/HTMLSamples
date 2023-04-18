using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Net;
using System.Web;
using System.Web.UI.WebControls;

namespace MyNFT_s.forms
{
    public class contact
    {
        public contact()
        {
            MailMessage msg = new MailMessage(); //Mesaj gövdesini tanımlıyoruz...
            msg.Subject = "subject";
            msg.From = new MailAddress("email", "name");
            msg.To.Add(new MailAddress("cptmfs@captaindeveloper.com", "name"));

            //Mesaj içeriğinde HTML karakterler yer alıyor ise aşağıdaki alan TRUE olarak gönderilmeli ki HTML olarak yorumlansın. Yoksa düz yazı olarak gönderilir...
            msg.IsBodyHtml = true;
            msg.Body = "message";

            //Mesaj önceliği (BELİRTMEK ZORUNLU DEĞİL!)
            msg.Priority = MailPriority.High;

            //SMTP/Gönderici bilgilerinin yer aldığı erişim/doğrulama bilgileri
            SmtpClient smtp = new SmtpClient("smtp.live.com", 587); //Bu alanda gönderim yapacak hizmetin smtp adresini ve size verilen portu girmelisiniz.
            NetworkCredential AccountInfo = new NetworkCredential("feritsimsekk@yaani.com", "Simsek13");
            smtp.UseDefaultCredentials = false; //Standart doğrulama kullanılsın mı? -> Yalnızca gönderici özellikle istiyor ise TRUE işaretlenir.
            smtp.Credentials = AccountInfo;
            smtp.EnableSsl = false; //SSL kullanılarak mı gönderilsin...

            smtp.Send(msg);
            return;
        }
        

    }
}