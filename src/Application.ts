import { TestForm } from './forms/TestForm';
import { CustomInput } from './tags/CustomInput';
import { TestWindow } from './windows/TestWindow';
import { BusinessEvents, Components, FormEventFilter, FormsModule, Parser, TagLibrary } from 'futureforms';


export class Application
{
   public static async initialize() : Promise<void>
   {
      TagLibrary.addCustomTag(CustomInput);

      Components.bind("test",TestForm);
		Components.bind("window",TestWindow);

      FormsModule.initialize();
      await new Parser().parse();

		BusinessEvents.register(TestForm.instances[0]);
		let xx:FormEventFilter = new FormEventFilter("input","test","block","field");
   }
}