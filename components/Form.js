import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";

function Form() {
    const { t } = useTranslation("common");
    const [data, setData] = useState();

    const onSubmitData = () => { 
        console.log(data); 
   
        fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
              console.log('Response succeeded!')
             
             
            }
          })
    };
    return (
        <form className="w-full">
            <label className="text-base text-white font-normal leading-5 pl-2 ">
                {t("contacts.fio")}
            </label>
            <input
                type="text"
                name="name"
                minLength="4"
                placeholder={t("contacts.enterFio")}
                required
                className="  bg-white/80    order-solid rounded-sm h-12 w-full drop-shadow-md px-4 mt-2 mb-4 outline-0"
                onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <label className="text-base text-white font-normal leading-5 pl-2 ">{t("contacts.emailAddress")}      </label>
            <input
                type="email"
                placeholder={t("contacts.enterEmailAddress")}
                required
                className="  bg-white/80   rounded-sm h-12 w-full drop-shadow-md px-4 mt-2 mb-4 outline-0"
                onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <label className="text-white text-base font-normal leading-5 pl-2 mb-2">
                {t("contacts.message")}
            </label>
            <textarea
                rows={5}
                maxLength={1000}
                placeholder={t("contacts.enterMessage")}
                onChange={(e) => setData({ ...data, message: e.target.value })}
                className="bg-white/80   rounded-sm w-full drop-shadow-md px-4 py-2 mt-2 mb-4 outline-0"
            ></textarea>
            <button
                onClick={() => onSubmitData()}
                type="button"
                className="bg-[#0BC469]/70 w-full h-12 rounded-md text-white font-bold"
            >
                {t("contacts.senButton")}
            </button>
        </form>
    );
}

export default Form;