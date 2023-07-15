import Button from "../components/button";
import React from "react";
import { beforeEach, describe, expect, test,afterEach } from "vitest";
import matchers from "@testing-library/jest-dom/matchers";
import { cleanup,screen,render} from "@testing-library/react";

expect.extend(matchers);
describe("button Contender",()=>{
beforeEach(()=>{render(<Button text='Daleclick'/>);});
afterEach(()=>cleanup());

    test("is visible",()=>{
     const button= screen.getByText('Daleclick');
     expect(button).toBeVisible();
    })


})
