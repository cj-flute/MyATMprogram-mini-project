const dbpassword = ["1234", "2255", "1111", "7755"];
let person = document.getElementById("person");
const dbpass = "1234";
const bigBox = document.getElementById("bigBox");
const pinEl = document.getElementById("password");
const sendEl = document.getElementById("send-btn");
const loginInterface = document.querySelector(".login-interface");
const contentBox = document.querySelector(".content-box");
let count = 0;
let balEl = document.getElementById("bal");
const wrongPin = document.getElementById("wrong-pin");

//Refressh function
function refresh() {
    setTimeout(() => {
        history.go();
    }, 100);
}

// Register
const regDiv = document.querySelector(".reg-div");
const regBtn = document.getElementById("reg");
const registerDiv = document.querySelector(".register-div");
const username = document.getElementById("user-name");
const newPassword = document.getElementById("new-password");
const retypePassword = document.getElementById("retype-new-password");
const registerSendBtn = document.getElementById("register-send-btn");
const regBack = document.getElementById("reg-back");

regBtn.addEventListener("click", () => {
    regDiv.style.display = "none";
    contentBox.style.display = "none";
    registerDiv.style.display = "flex";
});
registerSendBtn.addEventListener("click", () => {
    if (newPassword.value === retypePassword.value && username.value !== "") {
        modal.style.display = "block";
        registerDiv.style.display = "none";
        contentBox.style.display = "block";
    } else if (username.value === "") {
        username.style.borderColor = "red";
    } else if (newPassword.value !== retypePassword.value) {
        retypePassword.style.borderColor = "red";
        retypePassword.value = "";
        retypePassword.setAttribute("placeholder", "Password Mismatch!");
    }
});
regBack.addEventListener("click", () => {
    refresh();
})

// modal message
const modal = document.querySelector(".modal");
const successful = document.querySelector(".successful");
let image = document.querySelector("#image");
const message = document.querySelector(".message");
const mess = document.querySelector("#mess");
const okBtn = document.querySelector("#ok-btn");
okBtn.addEventListener("click", () => {
    modal.style.display = "none";
})

sendEl.addEventListener("click", () => {
    count++
    
    if (pinEl.value == dbpassword[0] && count <= 3) {
        balEl.innerHTML = 2000;
        person.innerHTML = "John";
        loginInterface.style.display = "none";
    } else if (pinEl.value == dbpassword[1] && count <= 3) {
        balEl.innerHTML = 10000;
        person.innerHTML = "Chike";
        loginInterface.style.display = "none";
    } else if (pinEl.value == dbpassword[2] && count <= 3) {
        balEl.innerHTML = 5000;
        person.innerHTML = "David";
        loginInterface.style.display = "none";
    } else if (pinEl.value == dbpassword[3] && count <= 3) {
        balEl.innerHTML = 25000;
        person.innerHTML = "Michael";
        loginInterface.style.display = "none";
    } else if (pinEl.value == newPassword.value) {
        balEl.innerHTML = 0;
        person.innerHTML = username.value;
        loginInterface.style.display = "none";
    } else if (count > 2) {
        pinEl.disabled = true;
        wrongPin.innerHTML ="Locked!";
    } else {
        pinEl.style.borderColor = "red";
        wrongPin.innerHTML = `Wrong pin, ${3 - count} trials remaining. Try again.`;
    }
})


const option = document.querySelector(".option");
const withdrawDiv = document.querySelector(".withdraw-div");
const transferDiv = document.querySelector(".transfer-div");
const rechargeDiv = document.querySelector(".recharge-div");
const enquiryDiv = document.querySelector(".enquiry-div");
const depositDiv = document.querySelector(".deposit-div");
const cancelDiv = document.querySelector(".cancel-div");

// withdraw
const withdrawSendBtn = document.querySelector("#withdraw-send-btn");
const withdrawCancelBtn = document.querySelector("#withdraw-cancel-btn");
const withdrawCash = document.getElementById("cash");
// withdrawal function to be called
function withdrawal(amt, bal) {
    var newAmt;
    if (amt <= bal) {
        newAmt = bal - amt;
        modal.style.display = "block";
        mess.innerHTML = `SUCCESSFUL <br> TAKE CASH $${amt}`;
        //alert(`Take cash, $${amt} `)
    } else {
        newAmt = bal;
        modal.style.display = "block";
        mess.innerHTML = "FAILED <br> INSUFICIENT BALANCE";
        image.setAttribute("src", "/mine/49-492290_mitchell-aluminium-american-symbol-red-cross-wrong-symbol.png");
        // alert("Insuficient balance!");
    }
    return (newAmt);
}

//transfer
const bank = document.getElementById("bank");
const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");
const bankName = document.querySelector("#bank");
const bnkName = document.getElementById("bnk-name");
const bnkname = document.getElementById("bnkname");
const btn = document.querySelectorAll(".btn");
const accountNo = document.querySelector("#acct-no");
const amount = document.querySelector("#amount");
const bnkAcctNo = document.getElementById("bnkAcctNo");
const bnkamt = document.getElementById("bnk-amt");

// the options
const optionBoxBtn = document.querySelectorAll(".option-box-btn");
for (let c = 0; c < optionBoxBtn.length; c++){
    optionBoxBtn[c].addEventListener("click", (evt) => {
        console.log(evt.target.innerHTML);
        const obb = evt.target.innerHTML;
        if (obb === "WITHDRAW") {
            option.style.display = "none";
            withdrawSendBtn.addEventListener("click", () => {
                balEl.innerHTML = withdrawal(+withdrawCash.value, +balEl.innerHTML);
            });
            withdrawCancelBtn.addEventListener("click", () => {
                refresh();
            });
        } else if (obb === "TRANSFER") {
            option.style.display = "none";
            withdrawDiv.style.display = "none";
            for (let i = 0; i < btn.length; i++) {
                btn[i].addEventListener("click", (evt) => {
                    console.log(evt.target);
                    if (i == 2) {
                        slide1.style.display = "none";
                        bnkName.innerHTML = bankName.value;

                    } else if (i == 3) {
                        refresh();
                    } else if (i == 4) {
                        if (accountNo.value == "") {
                            accountNo.style.borderColor = "red";
                        } else if (amount.value == "") {
                            amount.style.borderColor = "red";
                        } else {
                            slide2.style.display = "none";
                            bnkname.innerHTML = bankName.value;
                            bnkAcctNo.innerHTML = accountNo.value;
                            bnkamt.innerHTML = amount.value;
                        }
                    } else if (i == 5) {
                        refresh();
                    } else if (i == 6) {
                        if (+amount.value <= balEl.innerHTML) {
                            balEl.innerHTML = +balEl.innerHTML - +amount.value;
                            modal.style.display = "block";
                            mess.innerHTML = `SUCCESSFUL <br> TAKE CASH $${amount.value}`;
                        } else {
                            modal.style.display = "block";
                            mess.innerHTML = "FAILED <br> INSUFICIENT BALANCE";
                            image.setAttribute("src", "/mine/49-492290_mitchell-aluminium-american-symbol-red-cross-wrong-symbol.png");
                        }
                    } else if (i == 7) {
                        refresh();
                    }
                });
            }
        } else if (obb === "ENQUIRY") {
            const acctBal = document.getElementById("acct-bal");
            const enquiryBack = document.getElementById("enquiry-back");
            option.style.display = "none";
            withdrawDiv.style.display = "none";
            transferDiv.style.display = "none";
            rechargeDiv.style.display = "none";
            acctBal.innerHTML = "$" + +balEl.innerHTML;
            enquiryBack.addEventListener("click", () => {
                rechargeDiv.style.display = "block";
                transferDiv.style.display = "block";
                withdrawDiv.style.display = "block";
                option.style.display = "flex";
            });
        } else if (obb === "DEPOSIT") {
            const depoCash = document.getElementById("depo-cash");
            const depositSendBtn = document.getElementById("deposit-send-btn");
            const depoBackBtn = document.getElementById("depo-back");
            option.style.display = "none";
            withdrawDiv.style.display = "none";
            transferDiv.style.display = "none";
            rechargeDiv.style.display = "none";
            enquiryDiv.style.display = "none";
            depositSendBtn.addEventListener("click", () => {
                balEl.innerHTML = +balEl.innerHTML + +depoCash.value;
                modal.style.display = "block";
                mess.innerHTML = `SUCCESSFUL`;
            });
            depoBackBtn.addEventListener("click", () => {
                enquiryDiv.style.display = "flex";
                rechargeDiv.style.display = "block";
                transferDiv.style.display = "block";
                withdrawDiv.style.display = "block";
                option.style.display = "flex";
            });
        } else if (obb === "CANCEL") {
            refresh();
        }
    });
}


