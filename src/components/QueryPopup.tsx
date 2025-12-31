import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X, Plane } from "lucide-react";

const QueryPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        adults: "",
        destination: "",
    });

    useEffect(() => {
        // Check if popup has already been shown in this session
        const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");

        if (!hasSeenPopup) {
            const timer = setTimeout(() => {
                setIsOpen(true);
                sessionStorage.setItem("hasSeenPopup", "true");
            }, 10000); // 10 seconds

            return () => clearTimeout(timer);
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Create WhatsApp message
        const message = `*New Trip Enquiry (Popup)*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Audlts:* ${formData.adults}%0A*Destination:* ${formData.destination || "Not specified"}`;

        // Open WhatsApp
        window.open(`https://wa.me/918178515133?text=${message}`, '_blank');
        setIsOpen(false);
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-[400px] p-0 overflow-hidden bg-white border-0 shadow-2xl">
                {/* Decorative Header */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white relative">
                    <div className="absolute top-0 right-0 p-2">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white/80 hover:text-white transition-colors p-1"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
                            <Plane className="w-5 h-5 text-white" />
                        </div>
                        <h2 className="text-lg font-bold">Plan Your Dream Trip</h2>
                    </div>
                    <p className="text-blue-100 text-sm">
                        Get a customized itinerary & best quote from our travel experts.
                    </p>
                </div>

                <div className="p-6 pt-4">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Name</label>
                            <Input
                                required
                                placeholder="Enter your name"
                                className="bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Mobile Number</label>
                            <Input
                                required
                                type="tel"
                                placeholder="Enter mobile number"
                                className="bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Number of Adults</label>
                            <Input
                                required
                                type="number"
                                min="1"
                                placeholder="Enter number of adults"
                                className="bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                                value={formData.adults}
                                onChange={(e) => setFormData({ ...formData, adults: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Preferred Destination</label>
                            <Select
                                onValueChange={(value) => setFormData({ ...formData, destination: value })}
                            >
                                <SelectTrigger className="bg-gray-50 border-gray-200 focus:bg-white transition-colors">
                                    <SelectValue placeholder="Select destination" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="uttarakhand">Uttarakhand</SelectItem>
                                    <SelectItem value="himachal">Himachal Pradesh</SelectItem>
                                    <SelectItem value="kashmir">Kashmir</SelectItem>
                                    <SelectItem value="kerala">Kerala</SelectItem>
                                    <SelectItem value="goa">Goa</SelectItem>
                                    <SelectItem value="international">International</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <Button type="submit" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-5 text-base shadow-lg shadow-green-500/20">
                            Request Call Back
                        </Button>

                        <p className="text-xs text-center text-gray-400">
                            Our travel experts will contact you shortly.
                        </p>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default QueryPopup;
