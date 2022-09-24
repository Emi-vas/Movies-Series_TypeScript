import { useEffect, useState } from "react";
import { COLORS } from "../assets/constant";
import { createArray, isSizeTel } from "../functions/utils";
import { PageNumber, PageTel } from "./Pagination.style";

interface Props {
    pageActive: number,
    setPageActive: (value: number) => void
}

const Pagination = ({ pageActive, setPageActive }: Props) => {
    const nbPages = createArray(10)



    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                margin: "20px 0"
            }}
        >
            {
                nbPages.map((page) => (
                    <PageNumber
                        key={page}
                        onClick={() => setPageActive(page)}
                        style={{
                           background: pageActive == page ? COLORS.red : "",
                           color:  pageActive == page ? COLORS.yellow : "",
                           display: isSizeTel() ? "none" : ""
                        }}
                    >
                        {page}
                    </PageNumber>
                ))
            }

            {
                <div
                    style={{
                        display: isSizeTel() ? "flex" : "none"
                    }}
                >
                    <PageTel
                         onClick={() => setPageActive(pageActive - 1)}
                         style={{
                            display: pageActive == 1 ? "none" : ""
                         }}
                    >
                        <i className="fa-solid fa-backward"></i>
                        <p>Previus</p>
                    </PageTel>

                    <PageTel
                        onClick={() => setPageActive(pageActive + 1)}
                    >
                        <p>Next</p>
                        <i className="fa-solid fa-forward"></i>
                    </PageTel>

                </div>
            }
        </div>
    );
};

export default Pagination;