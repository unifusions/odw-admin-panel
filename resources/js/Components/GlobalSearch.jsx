import { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import axios from "axios";
import LoadingDots from "./LoadingDots";


export default function GlobalSearch() {

    const [show, setShow] = useState(false);
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [activeIndex, setActiveIndex] = useState(-1);
    const [loading, setLoading] = useState(false);
    // Toggle modal with Ctrl+K (or Cmd+K on Mac)
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

        setLoading(true);
        const res = await axios.get(route("search"), { params: { q: value } });
         
        setResults(res.data);
        setActiveIndex(-1);
        setLoading(false)
    };

    const handleKeyDown = (e) => {
        if (!results.length) return;

        if (e.key === "ArrowDown") {
            e.preventDefault();
            setActiveIndex((prev) => (prev + 1) % results.length);
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setActiveIndex((prev) => (prev - 1 + results.length) % results.length);
        } else if (e.key === "Enter" && activeIndex >= 0) {
            e.preventDefault();
            const item = results[activeIndex];
            if (item) {
                window.location.href = route(item.route.name, item.route.params);
            }
        }
    };
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

    const RenderUserItem = ({ item }) => {
        return (<Link class="dropdown-item" href={item.route}>


            <div class="d-flex align-items-center">
                <div class="flex-shrink-0">

                    {item.photo ? <img class="avatar avatar-xs avatar-circle" src={item.photo} alt="" /> : <div class="avatar avatar-xs avatar-soft-info avatar-circle">
                        <span class="avatar-initials">{item.name[0]}</span>
                    </div>}
                </div>
                <div class="flex-grow-1 text-truncate ms-2">
                    <span>{item.name}</span>
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

                <span class="dropdown-header">{group}</span>
                {result.map((item) => <RenderUserItem item={item} />

                )}
                <div class="dropdown-divider"></div>
            </>
        )
    }

    const renderSearch = (group, result) => {
        switch (group) {
            case "clinics":
                return (
                    result.length > 0 && <Clinic group={group} result={result} />
                )
                break;


            default:
                return (
                    result.length > 0 && <Dentist group={group} result={result} />
                )
                break;
        }
    }
    return (
        <>
            <div className="dropdown ms-2">
                <div className="d-none d-lg-block">
                    <div className="input-group input-group-merge input-group-borderless input-group-hover-light navbar-input-group">
                        <div className="input-group-prepend input-group-text">
                            <i className="bi-search"></i>
                        </div>
                      
                        <input type="search" className="focus form-control"
                            placeholder="Search " aria-label="Search "

                            value={query}
                            onChange={handleSearch}
                            onKeyDown={handleKeyDown}

                        />
<span class="loader"></span>
                    </div>
                </div>



                {Object.keys(results).length > 0 && (
                    <>
                        <div id="searchDropdownMenu" class="hs-form-search-menu-content dropdown-menu dropdown-menu-form-search navbar-dropdown-menu-borderless animated hs-form-search-menu-initialized slideInUp" style={{ top: "120%", width: "100%", animationDuration: "300ms" }}>
                            <div class="card">

                                <div class="card-body-height">
{loading &&   <LoadingDots dotSize={5} />}
                                    {/* <span class="dropdown-header">Recent searches</span>

                                    <div class="dropdown-item bg-transparent text-wrap">
                                     <a class="btn btn-soft-dark btn-xs rounded-pill" href="./index.html">
                    Gulp <i class="bi-search ms-1"></i>
                  </a>
                                    </div>

                                    <div class="dropdown-divider"></div> */}
                                    {Object.keys(results).map((group) => renderSearch(group, results[group]))}






                                </div>


                            </div>
                        </div>



                    </>
                )}


            </div>


        </>
    )
}