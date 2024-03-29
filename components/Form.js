import { useTranslation } from "next-i18next";
import { useEffect, useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

function Form() {
    const { t } = useTranslation("common");
    const [data, setData] = useState();
    const [token, setToken] = useState(null);
    const captchaRef = useRef(null);

    const onSubmitData = async () => {
        console.log(data);
        await captchaRef.current.execute({ async: true });
        fetch("/api/contact", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((res) => {
            console.log("Response received");
            if (res.status === 200) {
                console.log("Response succeeded!");
            }
        });
        captchaRef.current.resetCaptcha();
    };
    useEffect(() => {}, [token]);
    return (
        <form className="lg:mr-12">
            <label className="text-base  font-bold leading-5 pl-2 ">
                {t("contacts.fio")}
            </label>
            <input
                type="text"
                name="name"
                minLength="4"
                placeholder={t("contacts.enterFio")}
                required
                className="  bg-white/80   order-solid rounded-sm h-12 w-full drop-shadow-md px-4 mt-2 mb-4 outline-0"
                onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <label className="text-base  font-bold leading-5 pl-2 ">
                {t("contacts.emailAddress")}{" "}
            </label>
            <input
                type="email"
                placeholder={t("contacts.enterEmailAddress")}
                required
                className="  bg-white/80   rounded-sm h-12 w-full drop-shadow-md px-4 mt-2 mb-4 outline-0"
                onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <label className=" text-base font-bold leading-5 pl-2 mb-2">
                {t("contacts.message")}
            </label>
            <textarea
                rows={5}
                maxLength={1000}
                placeholder={t("contacts.enterMessage")}
                onChange={(e) => setData({ ...data, message: e.target.value })}
                className="bg-white/80   rounded-sm w-full drop-shadow-md px-4 py-2 mt-2 mb-4 outline-0"
            ></textarea>
            <HCaptcha
                sitekey={process.env.HCAPTCHA}
                onVerify={setToken}
                ref={captchaRef}
            />
            <button
                onClick={() => onSubmitData()}
                type="button"
                className="bg-green w-full h-12 mt-4 rounded-md text-white font-bold"
            >
                {t("contacts.senButton")}
            </button>
        </form>
    );
}

export default Form;
