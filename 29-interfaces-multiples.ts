interface INotificationEmail {
  sentEmail(message: string, sender: string, receiver: string): void;
}

interface INotificationWhatsApp {
  sentMessageWhatsApp(message: string, sender: string, receiver: string): void;
}

class NotificationPlanner implements INotificationEmail {
  sentEmail(message: string, sender: string, receiver: string): void {
    console.log(`message: ${message} sent from ${sender} to ${receiver}`);
  }
}

class NotificationCustomer
  implements INotificationEmail, INotificationWhatsApp
{
  sentEmail(message: string, sender: string, receiver: string): void {
    console.log(`message: ${message} sent from ${sender} to ${receiver}`);
  }

  sentMessageWhatsApp(message: string, sender: string, receiver: string): void {
    console.log(`message: ${message} sent from ${sender} to ${receiver}`);
  }
}
