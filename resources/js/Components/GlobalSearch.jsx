import { useState, useEffect, useRef } from "react";
import { Link } from "@inertiajs/react";
import axios from "axios";
import LoadingDots from "./LoadingDots";



import { Search, Package, Users, ShoppingCart, FileText, Receipt, Settings, Image, Warehouse, LayoutDashboard, FolderTree, Tags, Layers } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Avatar from "./ui/avatar";
const pages = [
    { type: "page", icon: LayoutDashboard, title: "Dashboard", description: "Overview & analytics", href: "/admin" },
    { type: "page", icon: Receipt, title: "POS - New Sale", description: "Create a new sale", href: "/admin/pos" },
    { type: "page", icon: Receipt, title: "POS - Sales History", description: "View past transactions", href: "/admin/pos/sales" },
    { type: "page", icon: FileText, title: "Invoices", description: "Manage invoices", href: "/admin/invoices" },
    { type: "page", icon: Package, title: "Products", description: "Manage products", href: "/admin/products" },
    { type: "page", icon: Tags, title: "Attributes", description: "Product attributes", href: "/admin/products/attributes" },
    { type: "page", icon: FolderTree, title: "Categories", description: "Product categories", href: "/admin/products/categories" },
    { type: "page", icon: Layers, title: "Collections", description: "Product collections", href: "/admin/products/collections" },
    { type: "page", icon: Image, title: "Media", description: "Media library", href: "/admin/media" },
    { type: "page", icon: Warehouse, title: "Inventory", description: "Stock management", href: "/admin/inventory" },
    { type: "page", icon: ShoppingCart, title: "Orders", description: "Order management", href: "/admin/orders" },
    { type: "page", icon: Users, title: "Customers", description: "Customer management", href: "/admin/customers" },
    { type: "page", icon: Settings, title: "Settings", description: "Admin settings", href: "/admin/settings" },
];


export default function GlobalSearch() {

    const [show, setShow] = useState(false);
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [activeIndex, setActiveIndex] = useState(-1);
    const [loading, setLoading] = useState(false);
    // Toggle modal with Ctrl+K (or Cmd+K on Mac)
    const wrapperRef = useRef(null);

    useEffect(() => {
        const down = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === "k") {
                e.preventDefault();
                setShow((prev) => !prev);
            } else if (e.key === "Escape") {
                setShow(false);
            }
        };
        window.addEventListener("keydown", down);
        return () => window.removeEventListener("keydown", down);
    }, []);

    const handleSearch = async (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value.length < 2) {
            setResults([]);
            setActiveIndex(-1);
            return;
        }
        setIsOpen(true);
        setLoading(true);
        const res = await axios.get(route("search"), { params: { q: value } });

        setResults(res.data);
        setActiveIndex(-1);
        setLoading(false)
    };

    // const handleKeyDown = (e) => {
    //     if (!results.length) return;

    //     if (e.key === "ArrowDown") {
    //         e.preventDefault();
    //         setActiveIndex((prev) => (prev + 1) % results.length);
    //     } else if (e.key === "ArrowUp") {
    //         e.preventDefault();
    //         setActiveIndex((prev) => (prev - 1 + results.length) % results.length);
    //     } else if (e.key === "Enter" && activeIndex >= 0) {
    //         e.preventDefault();
    //         const item = results[activeIndex];
    //         if (item) {
    //             window.location.href = route(item.route.name, item.route.params);
    //         }
    //     }
    // };
    const RenderClinicItem = ({ item }) => {
        return (<Link class="dropdown-item" href={item.route}>
            <div class="d-flex align-items-center">
                <div class="flex-shrink-0">
                    <span class="icon icon-soft-dark icon-xs icon-circle">
                        <i class="bi-geo-alt"></i>
                    </span>
                </div>
                <div key={item.id} class="flex-grow-1 text-truncate ms-2">
                    <span>{item.name}</span>
                </div>
            </div>
        </Link>)
    }

    const RenderUserItem = ({ item, type }) => {
        return (<Link class="dropdown-item" href={item.route}>


            <div class="flex w-full items-center gap-3 px-3 py-2 text-left transition-colors">
                <div class="h-10 w-10  flex-shrink-0">

                    {item.photo ? <img class="avatar avatar-xs avatar-circle" src={item.photo} alt="" /> :
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">

                            {item.name[0]}
                        </div>


                    }
                </div>
                <div class="flex-1 overflow-hidden">
                    <p className="truncate text-sm font-medium">{item.name}</p>
                    <p className="truncate text-xs text-muted-foreground">
                        {type}
                    </p>

                    {/* {result.description} */}



                </div>
            </div>




        </Link>)
    };
    // if (!show) return null;
    const Clinic = ({ group, result }) => {

        return (
            <>

                <span class="dropdown-header">{group}</span>
                {result.map((item) => <RenderClinicItem item={item} />

                )}
                <div class="dropdown-divider"></div>
            </>
        )
    }

    const Dentist = ({ group, result }) => {
        return (
            <>


                {result.map((item) => <RenderUserItem item={item} type={group} />

                )}
                <div class="dropdown-divider"></div>
            </>
        )
    }

    const renderSearch = (group, result) => {
        switch (group) {
            // case "clinics":
            //     return (
            //         result.length > 0 && <Clinic group={group} result={result} />
            //     )
            //     break;


            default:
                return (
                    result.length > 0 && <Dentist group={group} result={result} />
                )
                break;
        }
    }


    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef(null);
    const dropdownRef = useRef(null);
    const navigate = route();


    useEffect(() => {
        setSelectedIndex(0);
    }, [query]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target) &&
                inputRef.current &&
                !inputRef.current.contains(e.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
 

    const handleKeyDown = (e) => {
        if (!isOpen) return;

        switch (e.key) {
            case "ArrowDown":
                e.preventDefault();
                setSelectedIndex((prev) => (prev + 1) % results.length);
                break;
            case "ArrowUp":
                e.preventDefault();
                setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
                break;
            case "Enter":
                e.preventDefault();
                if (results[selectedIndex]) {
                    handleSelect(results[selectedIndex]);
                }
                break;
            case "Escape":
                setIsOpen(false);
                inputRef.current?.blur();
                break;
        }
    };

    useEffect(() => {
    const handleClickOutside = (e) => {
        if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
            setIsOpen(false);
            setQuery('');
        }

    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);

    return (
        <>

            <div ref={wrapperRef} className="relative w-full ">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        ref={inputRef}
                        type="text"
                        placeholder="Search pages, products..."
                        value={query}
                        onChange={handleSearch}
                    
                       
                        onKeyDown={handleKeyDown}
                        className="h-9 w-full border-1 border-border bg-background pl-9 pr-4 text-sm focus-visible:border-border focus-visible:border-foreground focus-visible:ring-0"
                    />
                </div>

                {isOpen && Object.keys(results).length > 0 && (
                    <div
                        ref={dropdownRef}
                        className="absolute top-full z-50 mt-1 w-full overflow-hidden border border-border  bg-background shadow-lg"
                    >
                        {query.trim() === "" && (
                            <div className="border-b border-border px-3 py-2">
                                <span className="text-xs text-muted-foreground">
                                    Search Results
                                </span>
                            </div>
                        )}
                        <div className="max-h-100 overflow-y-auto">

                            {Object.keys(results).map((group) => renderSearch(group, results[group]))}


                        </div>

                    </div>
                )}
            </div>

        </>
    )
}