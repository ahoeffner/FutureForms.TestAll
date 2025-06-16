import { Destination, BusinessEvent, BusinessEventListener, Form, FormEventFilter, Field } from "futureforms";

export class TestForm extends Form implements BusinessEventListener
{
	public id:number = TestForm.id$++;

	public static id$:number = 0;
	public static instances:TestForm[] = [];


   constructor(view:HTMLElement)
   {
      super(view);
		TestForm.instances.push(this);
      console.log("TestForm created")

		let dest:Destination = {component: this, function: null};

		let test1:FormEventFilter = new FormEventFilter(this,"input");
		let test2:FormEventFilter = new FormEventFilter(this,"input","CountryDS","country_name");

		//this.addTrigger(this,test1);
		//this.addTrigger(this.field,test2);
		this.addTrigger(dest.function = this.handleBusinessEvent,test1);
   }


	public async handleBusinessEvent(event:BusinessEvent) : Promise<boolean>
	{
		let row:number 	= event.properties.get(Field.ROW);
		let value:any 		= event.properties.get(Field.VALUE);
		let field:string 	= event.properties.get(Field.FIELD);

      console.log("general::Event handled: "+event.type+" "+field+"["+row+"] = "+value);
		return(true);
   }


	public async field(event:BusinessEvent) : Promise<boolean>
	{
      console.log("field::Event handled: "+event.type+" "+this.id);
		return(true);
   }
}