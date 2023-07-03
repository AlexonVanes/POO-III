import TransportadoraAdapter from "./adapters/TransportadoraAdapter";
import Correios from "./correios/Correios";
import CorreiosTransporter from "./correios/CorreiosTransporter";
import Transportadora from "./transportadora/Transportadora";



const transporter : CorreiosTransporter = new Correios();
transporter.sendCorreios();
transporter.receiveCorreios();

const transporter2 : CorreiosTransporter = new TransportadoraAdapter(new Transportadora);
transporter2.sendCorreios();
transporter2.receiveCorreios();