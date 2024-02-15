import React from "react";
import { render } from "@testing-library/react";
import {AboutAccountPopup} from "./AboutAccountPopup"

describe("AboutAccountPopup",()=>{
 it("Loaded without crashing",()=>{
    render(<AboutAccountPopup/>)
 })
})