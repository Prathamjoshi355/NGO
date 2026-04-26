import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, Heart, Check } from "lucide-react";
import { toast } from "sonner";

const tiers = [
  { amount: 500, label: "Supports basic needs" },
  { amount: 1000, label: "Helps in community activities" },
  { amount: 5000, label: "Supports medical or social campaigns" },
];

export default function Donate() {
  const [selected, setSelected] = useState<number>(1000);
  const [custom, setCustom] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = custom ? Number(custom) : selected;
    if (!amount || amount < 1) {
      toast.error("Please enter a valid amount");
      return;
    }
    if (!name || !email) {
      toast.error("Please fill in your name and email");
      return;
    }
    toast.success(`Thank you ${name}! Your Rs ${amount} intent is noted. Our team will reach out with payment details.`);
  };

  return (
    <Layout>
      <section className="bg-gradient-to-br from-orange-50 to-amber-50 py-16 md:py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-orange-600 font-semibold text-sm tracking-wide uppercase">Donate</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">
            Support Our Work
          </h1>
          <p className="text-slate-600 text-lg">
            Your contribution helps us continue our efforts in healthcare, education, and
            social welfare. Every donation directly contributes to real activities and real people.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleDonate}>
              <Card className="border-orange-100 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h3 className="font-bold text-slate-900 text-lg mb-4">Choose an amount</h3>
                  <div className="grid sm:grid-cols-3 gap-3 mb-6">
                    {tiers.map((t) => (
                      <button
                        type="button"
                        key={t.amount}
                        onClick={() => { setSelected(t.amount); setCustom(""); }}
                        className={`text-left rounded-xl border-2 p-4 transition-all ${
                          selected === t.amount && !custom
                            ? "border-orange-500 bg-orange-50"
                            : "border-slate-200 hover:border-orange-300"
                        }`}
                      >
                        <div className="text-2xl font-bold text-slate-900">Rs {t.amount.toLocaleString()}</div>
                        <div className="text-xs text-slate-600 mt-1">{t.label}</div>
                      </button>
                    ))}
                  </div>

                  <div className="mb-6">
                    <Label htmlFor="custom" className="text-sm font-medium text-slate-700">Or enter custom amount (Rs)</Label>
                    <Input
                      id="custom"
                      type="number"
                      min={1}
                      placeholder="e.g. 2500"
                      value={custom}
                      onChange={(e) => setCustom(e.target.value)}
                      className="mt-1.5"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-slate-700">Your name</Label>
                      <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1.5" required />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-slate-700">Email</Label>
                      <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1.5" required />
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold">
                    <Heart className="w-4 h-4 mr-2 fill-white" />
                    Donate Rs {custom || selected}
                  </Button>

                  <div className="flex items-center justify-center gap-2 mt-4 text-xs text-slate-500">
                    <Shield className="w-3.5 h-3.5" />
                    Secure and transparent, every rupee goes to the cause.
                  </div>
                </CardContent>
              </Card>
            </form>

            <div className="mt-8 grid sm:grid-cols-3 gap-3 text-sm">
              {["100% Transparent", "Tax Receipt Available", "Real Impact Reports"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-slate-700">
                  <Check className="w-4 h-4 text-green-600" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
