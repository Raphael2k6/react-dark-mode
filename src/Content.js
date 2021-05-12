import React, { useContext } from "react";
import Context from "./context";

const Content = () => {
    const { state } = useContext(Context);

    return (
        <div>
            <div>
                <h5>{`Switch to ${state.isDark ? "light" : "dark"} mode`}</h5>
            </div>
        </div>
    )
};

export default Content;
