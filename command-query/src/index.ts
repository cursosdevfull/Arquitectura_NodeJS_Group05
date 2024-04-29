import { CommandBus } from "./command-bus";
import { AppointmentCommand } from "./command/AppointmentCommand";
import { AppointmentCommandHandler } from "./command/AppointmentCommandHandler";
import { queryBus } from "./config-buses";
import { ProductListQuery } from "./query/ProductListQuery";

const command: AppointmentCommand = new AppointmentCommand(
  "8c69152d-2a70-481d-b13d-f850bf3f4322",
  "15871626-fbc9-4439-8d48-d7bf9ba06e06",
  "7f22b455-769c-4420-9a16-cd663ea78361",
  new Date()
);

const bus: CommandBus = new CommandBus();
bus.registerHandler(new AppointmentCommandHandler());
bus.execute(command);

const query: ProductListQuery = new ProductListQuery(1, 3, true, 1);
console.log("result", queryBus.execute(query));
