import { Form } from "futureforms";

export class TestForm extends Form
{
	public static instances:TestForm[] = [];


   constructor(view:HTMLElement)
   {
      super(view);
		TestForm.instances.push(this);
      console.log("TestForm created")
   }
}