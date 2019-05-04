import React, { Component } from "react";

class Categories extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="categories-block">
                <div class="innerLeftColumn" id="dim-Category">
                    <h4 class="shpRefineType">Category</h4>
                    <ul>
                        <li className="margin-b">
                            <a class="bypassInterstitialPage" href="/liver-cleanse">Liver Cleanse</a><span class="num-reviews"></span></li>
                        <li className="margin-b">
                            <a class="bypassInterstitialPage" href="/gastrointestinal-cleanse">Gastrointestinal Cleanse</a><span class="num-reviews"></span></li>
                        <li className="margin-b">
                            <a class="bypassInterstitialPage" href="/cleansing-detoxification-herbs">Cleansing and Detoxification Herbs</a><span class="num-reviews"></span></li>
                        <li className="margin-b">
                            <a class="bypassInterstitialPage" href="/cleansing-detoxification-tea">Cleansing and Detoxification Tea</a><span class="num-reviews"></span></li>
                        <li className="margin-b">
                            <a class="bypassInterstitialPage" href="/colon-cleanse">Colon Cleanse</a><span class="num-reviews"></span></li>
                        <li className="margin-b">
                            <a class="bypassInterstitialPage" href="/whole-body-cleanse">Whole Body Cleanse</a><span class="num-reviews"></span></li>
                        
                    </ul>
                </div>
            </div>
        )
    }
}

export default Categories;