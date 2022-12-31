import { t } from "i18next"

export const DataFilter =[
       {
           name:t("news"),
           value:'createdDate',
       },
       {
           name:t("old"),
           value:'-createdDate'
       },
       {
           name:t("a_z"),
           value:'A->Z'
       },
       {
           name:t("z_a"),
           value:'-A->Z'
       },
       {
           name:t("txt_tang"),
           value:'price'
       },
       {
           name:t("txt_giam"),
           value:'-price'
       }

   ]

export const DataTitleOrder=[
    {
        name:t("unconfimred"),
        value:1
    },
    {
        name:t("confimred"),
        value:3
    },
    {
        name:t("delivered"),
        value:4
    },
    {
        name:t("success"),
        value:5
    },
    {
        name:t("cancel_order"),
        value:6
    },
]
