import { COLORS } from "../assets/constant";
import { createArray } from "../functions/utils";
import { PageNumber } from "./Pagination.style";

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
                           color:  pageActive == page ? COLORS.yellow : ""
                        }}
                    >
                        {page}
                    </PageNumber>
                ))
            }
        </div>
    );
};

export default Pagination;