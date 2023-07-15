import { describe, expectTypeOf,test ,expect} from "vitest";
import A from "./katas/countByCountry.mjs";

const dataII=[
    {
        "artist": "Miley Cyrus",
        "country": "United States"
      },
      {
        "artist": "FIFTY FIFTY",
        "country": "United Kingdom"
      },
      {
        "artist": "ROSALÍA",
        "country": "Spain"
      },
      {
        "artist": "PinkPantheress",
        "country": "United Kingdom"
      },
      {
        "artist": "Metro Boomin",
        "country": "United States"
      },
      {
        "artist": "David Kushner",
        "country": "United States"
      },
      {
        "artist": "KAROL G",
        "country": "Colombia"
      },
      {
        "artist": "Rema",
        "country": "Nigeria"
      }
]
describe('Kata singers',()=>{

    test('is a function',()=>{
        expectTypeOf(A).toBeFunction();
    })
    test('return something, so the values are defined',()=>{
        expect(A()).toBeDefined()
    })   

    test('return an Array', () => {
        expect(A()).toContain([])
      })

    test('return an object',()=>{
        expectTypeOf(A([])).toBeObject();
    })  

    test('Does not have country property',()=>{
      expect(A()).not.toHaveProperty('country')

    })  

    /*test('tiene formato de arreglo con llave numerica',()=>{
        const countMap= A();
        expect(countMap).toMatchObject({
            Spain:1
        });
    })
    */

    test("propiedad por ciudad (50 ciudades)",()=>{
        const countMap=A();
        const keys=Object.keys(countMap);
        expect(keys).toHaveLength(50);
    })


    

})