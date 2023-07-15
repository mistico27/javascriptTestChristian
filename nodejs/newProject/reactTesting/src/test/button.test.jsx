import { afterEach, beforeEach, describe, expect, test } from "vitest";
import Button from "../components/button";
import matchers from "@testing-library/jest-dom/matchers";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";

expect.extend(matchers);
describe("button Contender",()=>{
beforeEach(()=>{render(<Button text='Daleclick'/>);});
afterEach(()=>cleanup());

    test("is visible",()=>{
     const button= screen.getByText('Daleclick');
     expect(button).toBeVisible();
    })
    
})
