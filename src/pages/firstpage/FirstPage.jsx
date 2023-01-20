import style from "./firstPage.module.scss"

import React from 'react'

const FirstPage = () => {
  return (
    <div className={style.firstPageContainer}>
        <div className={style.firstPageWrapper}>

            <div></div> {/*1st card*/}

            <div>       {/*2nd card (white background part) displayed relative*/}
                <div>   {/*2nd card displayed absolute*/}

                </div>
            </div>

            <div></div> {/*3rd card*/}

        </div>
    </div>
  )
}

export default FirstPage
