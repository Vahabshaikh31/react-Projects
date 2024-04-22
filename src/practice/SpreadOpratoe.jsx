
const SpreadOpratoe = () => {
 
    // you can also merge the two objects together
    const ob1 = {
        first : 'Abdlvahab',
        second : 'Shaikh',
    }
    const ob2 = {
        age :10,
        ...ob1,
        second:'vahsb',
        gender: 'male',
    }
    console.log(ob2);
}
export default SpreadOpratoe
