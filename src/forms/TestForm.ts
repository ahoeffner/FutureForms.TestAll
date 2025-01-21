import { BusinessEvent, BusinessEventListener, BusinessEvents, Form, FormEventFilter } from "futureforms";

export class TestForm extends Form implements BusinessEventListener
{
	public static instances:TestForm[] = [];


   constructor(view:HTMLElement)
   {
      super(view);
		TestForm.instances.push(this);
      console.log("TestForm created")

		let test:FormEventFilter = new FormEventFilter("input",this,"block","field");
		BusinessEvents.addListener(this,test);
   }


	public async handleBusinessEvent(event:BusinessEvent) : Promise<boolean>
	{
      console.log("Event handled:",event);
		return(true);
   }
}