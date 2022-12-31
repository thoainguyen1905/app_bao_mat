import { t } from "i18next"
import {Colors} from "@theme";

export const TxtOrderStatus=(index:number)=>{
    switch (index) {
        case 1:
            return t("UNPAID")
        case 2:
            return t("PAID")
        case 3:
            return t("confimred")
        case 4:
            return t("delivered")
        case 5:
            return t("success")
        case 6:
            return t("cancel_order")
    }
}
export const BackgroundOrder=(index:number)=>{
    switch (index) {
        case 1:
           return  Colors.unPaid
        case 2:
            return  Colors.paid
        case 3:
            return  Colors.confimred
        case 4:
            return  Colors.delivered
        case 5:
            return  Colors.success
        case 6:
            return  Colors.cancelled
    }
}
export const ColorTxtOrder=(index:number)=>{
    switch (index) {
        case 1:
            return  Colors.unPaidTxt
        case 2:
            return  Colors.paidTxt
        case 3:
            return  Colors.confimredTxt
        case 4:
            return  Colors.deliveredTxt
        case 5:
            return  Colors.successTxt
        case 6:
            return  Colors.cancelledTxt
    }
}
