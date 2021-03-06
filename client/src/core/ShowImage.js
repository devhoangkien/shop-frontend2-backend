import React from "react";
import { API } from "../config";

const ShowImage = ({ item, url }) => (
    <div className="w-12/12">
        <img
            src={`${API}/${url}/photo/${item._id}`}
            alt={item.name}
            className="shadow-lg rounded max-w-full h-auto align-middle border-none"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
        />
    </div>
);

export default ShowImage;
