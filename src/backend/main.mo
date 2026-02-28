import Map "mo:core/Map";
import Time "mo:core/Time";
import Array "mo:core/Array";
import Int "mo:core/Int";

actor {
  type ContactSubmission = {
    name : Text;
    phone : Text;
    email : Text;
    message : Text;
    serviceType : Text;
    timestamp : Time.Time;
  };

  var nextId = 0;

  let submissions = Map.empty<Int, ContactSubmission>();

  public shared ({ caller }) func submitContactForm(name : Text, phone : Text, email : Text, message : Text, serviceType : Text) : async () {
    let submission : ContactSubmission = {
      name;
      phone;
      email;
      message;
      serviceType;
      timestamp = Time.now();
    };

    submissions.add(nextId, submission);
    nextId += 1;
  };

  public query ({ caller }) func getAllSubmissions() : async [ContactSubmission] {
    let allSubmissions = submissions.values().toArray();
    allSubmissions;
  };

  public query ({ caller }) func getTotalSubmissions() : async Nat {
    submissions.size();
  };
};
