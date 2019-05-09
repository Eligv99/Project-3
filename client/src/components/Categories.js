import React, { Component } from "react";

class Categories extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="categories-block">
                <div className="innerLeftColumn" id="dim-Category">
                    <h4 className="shpRefineType">Category</h4>
                    <ul>
                        <li className="margin-b">
                            <a className="bypassInterstitialPage" href="/liver-cleanse">From A-Z</a><span className="num-reviews"></span></li>
                        <li className="margin-b">
                            <a className="bypassInterstitialPage" href="/gastrointestinal-cleanse">From Z-A</a><span className="num-reviews"></span></li>
                        <li className="margin-b">
                            <a className="bypassInterstitialPage" href="/cleansing-detoxification-herbs">Cleansing and Detoxification Herbs</a><span className="num-reviews"></span></li>
                        <li className="margin-b">
                            <a className="bypassInterstitialPage" href="/cleansing-detoxification-tea">Cleansing and Detoxification Tea</a><span className="num-reviews"></span></li>
                        
                        
                    </ul>
                </div>
            </div>
        )
    }
}

export default Categories;