import { Form } from "futureforms";

export class TestForm extends Form
{
   constructor(view:HTMLElement)
   {
      super(view);
      console.log("TestForm created")
   }
}