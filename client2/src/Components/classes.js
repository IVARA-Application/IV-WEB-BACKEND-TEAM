import React from "react";
import "./classes.css";
import GetAppIcon from '@material-ui/icons/GetApp';

const classes =()=>{

    return (
            <div className="bg">
                 <div
                  className="btn4">
                 <p className="text1">Class{' '}<span>4</span></p>
                </div>
                <p className="text2">Previous Year Papers</p>
                <p className="text3">Physics</p>
                <p className="text4">Chemistry</p>
                <p className="text5">Mathematics</p>
                <p className="text6">English</p>
                <p>
                <button className="download">
                Download <GetAppIcon/>
                </button>
                </p>
                <p>
                <button className="download2">
                Download <GetAppIcon/>
                </button>
                </p>
                <p>
                <button className="download3">
                Download <GetAppIcon/>
                </button>
                </p>
                <p>
                <button className="download4">
                Download <GetAppIcon/>
                </button>
                </p>
              
            </div>




    );


};

export default classes;
