
import React, { useState, useEffect, useRef } from "react";
import {
  CaretUp,
  CaretDown,
  CaretLeft,
  CaretRight,
  Book,
  Atom,
  Calculator,
  Flask,
  Circle,
  Diamond,
  Infinity,
  Star,
  Sun,
  Moon,
} from "phosphor-react";

// ─── SAMPLE CHAPTERS DATA (JUST A FEW FOR DEMO; PASTE ALL 40 FOR PRODUCTION) ─────────────────────
const chaptersData = [
  // -------- Physics (1–10) --------
  { id: 1, name: "Gravitation", class: "11", unit: "Unit A", subject: "Physics", status: "Not Started", stats: { year2025: "8Qs ↑", year2024: "6Qs ↓", totalQs: "0/205 Qs" }},
  { id: 2, name: "Math in Physics", class: "11", unit: "Unit B", subject: "Physics", status: "In Progress", stats: { year2025: "2Qs ↓", year2024: "6Qs ↑", totalQs: "56/116 Qs" }},
  { id: 3, name: "Units and Dimensions", class: "11", unit: "Unit C", subject: "Physics", status: "Completed", stats: { year2025: "6Qs ↑", year2024: "6Qs", totalQs: "0/205 Qs" }},
  { id: 4, name: "Motion in One Dimension", class: "11", unit: "Unit A", subject: "Physics", status: "Not Started", stats: { year2025: "8Qs ↑", year2024: "6Qs", totalQs: "0/205 Qs" }},
  { id: 5, name: "Motion in Two Dimensions", class: "11", unit: "Unit C", subject: "Physics", status: "In Progress", stats: { year2025: "8Qs ↑", year2024: "6Qs ↑", totalQs: "0/205 Qs" }},
  { id: 6, name: "Laws of Motion", class: "11", unit: "Unit B", subject: "Physics", status: "Completed", stats: { year2025: "6Qs", year2024: "6Qs", totalQs: "113/205 Qs" }},
  { id: 7, name: "Centre of Mass", class: "11", unit: "Unit D", subject: "Physics", status: "In Progress", stats: { year2025: "7Qs ↓", year2024: "5Qs", totalQs: "67/205 Qs" }},
  { id: 8, name: "Rotational Motion", class: "11", unit: "Unit E", subject: "Physics", status: "Not Started", stats: { year2025: "4Qs", year2024: "3Qs ↓", totalQs: "0/205 Qs" }},
  { id: 9, name: "Work, Power & Energy", class: "11", unit: "Unit F", subject: "Physics", status: "Completed", stats: { year2025: "10Qs ↑", year2024: "8Qs", totalQs: "120/205 Qs" }},
  { id: 10, name: "Thermodynamics", class: "11", unit: "Unit G", subject: "Physics", status: "In Progress", stats: { year2025: "3Qs", year2024: "4Qs", totalQs: "42/205 Qs" }},

  // -------- Chemistry (11–20) --------
  { id: 11, name: "Basic Concepts", class: "11", unit: "Unit A", subject: "Chemistry", status: "Not Started", stats: { year2025: "6Qs ↑", year2024: "3Qs", totalQs: "0/100 Qs" }},
  { id: 12, name: "Atomic Structure", class: "11", unit: "Unit B", subject: "Chemistry", status: "Completed", stats: { year2025: "8Qs", year2024: "7Qs ↑", totalQs: "95/100 Qs" }},
  { id: 13, name: "Periodic Table", class: "11", unit: "Unit C", subject: "Chemistry", status: "In Progress", stats: { year2025: "5Qs", year2024: "5Qs", totalQs: "50/100 Qs" }},
  { id: 14, name: "Chemical Bonding", class: "11", unit: "Unit D", subject: "Chemistry", status: "Not Started", stats: { year2025: "4Qs", year2024: "3Qs", totalQs: "0/100 Qs" }},
  { id: 15, name: "States of Matter", class: "11", unit: "Unit E", subject: "Chemistry", status: "Completed", stats: { year2025: "6Qs", year2024: "6Qs", totalQs: "88/100 Qs" }},
  { id: 16, name: "Thermodynamics", class: "11", unit: "Unit F", subject: "Chemistry", status: "In Progress", stats: { year2025: "5Qs ↑", year2024: "4Qs ↓", totalQs: "62/100 Qs" }},
  { id: 17, name: "Equilibrium", class: "11", unit: "Unit G", subject: "Chemistry", status: "Not Started", stats: { year2025: "3Qs ↓", year2024: "2Qs", totalQs: "0/100 Qs" }},
  { id: 18, name: "Redox Reactions", class: "11", unit: "Unit H", subject: "Chemistry", status: "Completed", stats: { year2025: "8Qs ↑", year2024: "6Qs", totalQs: "91/100 Qs" }},
  { id: 19, name: "Hydrogen", class: "11", unit: "Unit I", subject: "Chemistry", status: "In Progress", stats: { year2025: "4Qs", year2024: "4Qs", totalQs: "48/100 Qs" }},
  { id: 20, name: "The s-Block", class: "11", unit: "Unit J", subject: "Chemistry", status: "Completed", stats: { year2025: "5Qs", year2024: "5Qs", totalQs: "100/100 Qs" }},

  // -------- Mathematics (21–30) --------
  { id: 21, name: "Sets and Relations", class: "11", unit: "Unit A", subject: "Mathematics", status: "Not Started", stats: { year2025: "4Qs ↑", year2024: "3Qs ↓", totalQs: "0/180 Qs" }},
  { id: 22, name: "Trigonometry", class: "11", unit: "Unit B", subject: "Mathematics", status: "Completed", stats: { year2025: "9Qs", year2024: "8Qs", totalQs: "170/180 Qs" }},
  { id: 23, name: "Complex Numbers", class: "11", unit: "Unit C", subject: "Mathematics", status: "In Progress", stats: { year2025: "6Qs", year2024: "5Qs", totalQs: "90/180 Qs" }},
  { id: 24, name: "Quadratic Equations", class: "11", unit: "Unit D", subject: "Mathematics", status: "Completed", stats: { year2025: "8Qs", year2024: "7Qs", totalQs: "160/180 Qs" }},
  { id: 25, name: "Sequence and Series", class: "11", unit: "Unit E", subject: "Mathematics", status: "Not Started", stats: { year2025: "3Qs", year2024: "2Qs", totalQs: "0/180 Qs" }},
  { id: 26, name: "Straight Lines", class: "11", unit: "Unit F", subject: "Mathematics", status: "In Progress", stats: { year2025: "7Qs ↑", year2024: "6Qs ↓", totalQs: "90/180 Qs" }},
  { id: 27, name: "Conic Sections", class: "11", unit: "Unit G", subject: "Mathematics", status: "Completed", stats: { year2025: "5Qs", year2024: "4Qs", totalQs: "165/180 Qs" }},
  { id: 28, name: "Binomial Theorem", class: "11", unit: "Unit H", subject: "Mathematics", status: "Not Started", stats: { year2025: "2Qs ↓", year2024: "3Qs", totalQs: "0/180 Qs" }},
  { id: 29, name: "Probability", class: "11", unit: "Unit I", subject: "Mathematics", status: "In Progress", stats: { year2025: "4Qs", year2024: "4Qs", totalQs: "72/180 Qs" }},
  { id: 30, name: "Statistics", class: "11", unit: "Unit J", subject: "Mathematics", status: "Completed", stats: { year2025: "6Qs ↑", year2024: "6Qs", totalQs: "178/180 Qs" }},

  // -------- Biology (31–40) --------
 ,
];

// ─── ICON LIST FOR RANDOM ICON ASSIGNMENT ─────────────────────────────────────────────
const iconList = [Book, Atom, Calculator, Flask, Circle, Diamond, Infinity, Star];

// ─── SUBJECTS FOR TABS ────────────────────────────────────────────────────────────
const subjects = ["Physics", "Chemistry", "Mathematics"];

export default function App() {
  // ─── DARK MODE PERSISTENCE ─────────────────────────────────────────────────────
  const getInitialDark = () => {
    if (typeof window === "undefined") return false;
    const stored = localStorage.getItem("darkMode");
    if (stored !== null) return stored === "true";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };
  const [darkMode, setDarkMode] = useState(getInitialDark);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // ─── STATE FOR SUBJECT SELECTION + FILTERS ─────────────────────────────────────────
  const [selectedSubject, setSelectedSubject] = useState("Physics");

  // Dropdown toggles (desktop + mobile share these)
  const [showClassDropdown, setShowClassDropdown] = useState(false);
  const [showUnitDropdown, setShowUnitDropdown] = useState(false);

  // Filter selections
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [selectedUnits, setSelectedUnits] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All"); // All / Not Started / In Progress / Completed
  const [weakOnly, setWeakOnly] = useState(false);
  const [sortAsc, setSortAsc] = useState(true);

  // Close dropdowns when clicking outside
  const classRef = useRef();
  const unitRef = useRef();
  useEffect(() => {
    const handleOutside = (e) => {
      if (classRef.current && !classRef.current.contains(e.target)) {
        setShowClassDropdown(false);
      }
      if (unitRef.current && !unitRef.current.contains(e.target)) {
        setShowUnitDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  // ─── DERIVE UNIQUE CLASSES & UNITS FOR THE SELECTED SUBJECT ───────────────────────
  const subjectChaps = chaptersData.filter((c) => c.subject === selectedSubject);
  const uniqueClasses = [...new Set(subjectChaps.map((c) => c.class))];
  const uniqueUnits = [...new Set(subjectChaps.map((c) => c.unit))];

  // ─── FILTER + SORT THE CHAPTERS ─────────────────────────────────────────────────────
  const filteredChapters = subjectChaps
    .filter((chap) => {
      if (filterStatus !== "All" && chap.status !== filterStatus) return false;
      if (weakOnly) {
        // Example: treat “weak” as totalQs numerator < 50
        const numerator = parseInt(chap.stats.totalQs.split("/")[0], 10);
        if (numerator >= 50) return false;
      }
      if (selectedClasses.length > 0 && !selectedClasses.includes(chap.class)) return false;
      if (selectedUnits.length > 0 && !selectedUnits.includes(chap.unit)) return false;
      return true;
    })
    .sort((a, b) => {
      // Example sorting: by length of name (adjust to any numeric logic)
      return sortAsc
        ? a.name.length - b.name.length
        : b.name.length - a.name.length;
    });

  const chapterCount = filteredChapters.length;

  // ─── RANDOM ICON HELPER ─────────────────────────────────────────────────────────────
  const getRandomIcon = (id) => {
    const IconComp = iconList[id % iconList.length];
    return <IconComp size={20} weight="fill" className="text-textLight" />;
  };

  // ─── TOGGLE FILTER SELECTIONS ───────────────────────────────────────────────────────
  const toggleClassSelect = (cls) => {
    setSelectedClasses((prev) =>
      prev.includes(cls) ? prev.filter((c) => c !== cls) : [...prev, cls]
    );
  };
  const toggleUnitSelect = (unit) => {
    setSelectedUnits((prev) =>
      prev.includes(unit) ? prev.filter((u) => u !== unit) : [...prev, unit]
    );
  };

  return (
    <div className="min-h-screen bg-slate-900 dark:bg-slate-900 text-textLight flex flex-col">
      {/* ─────────── MOBILE HEADER — ONLY VISIBLE ON sm: AND DOWN ─────────── */}
      <div className="md:hidden">
        {/* Fake Status Bar */}
        <div className="bg-slate-800 h-6" />

        {/* Header with Back Arrow + Title + Dark/Light Button */}
        <div className="bg-mainBg flex items-center justify-between px-4 py-3 border-b border-borderColor">
          <button
            onClick={() => {
              /* Back button does nothing in this demo; wire up as needed */
            }}
            className="text-textLight"
          >
            <CaretLeft size={24} />
          </button>
          <h1 className="text-lg font-semibold">JEE Main</h1>
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="text-textLight"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Subject Tabs (Scrollable) */}
        <div className="bg-mainBg border-b border-borderColor overflow-x-auto">
          <div className="flex space-x-4 px-4 py-3">
            {subjects.map((subj) => {
              const isActive = selectedSubject === subj;
              return (
                <button
                  key={subj}
                  onClick={() => {
                    setSelectedSubject(subj);
                    setSelectedClasses([]);
                    setSelectedUnits([]);
                    setFilterStatus("All");
                    setWeakOnly(false);
                    setSortAsc(true);
                  }}
                  className={`flex flex-col items-center space-y-1 ${
                    isActive
                      ? "text-blue-400"
                      : "text-textMuted hover:text-textLight"
                  }`}
                >
                  <div>
                    {subj === "Physics" && <Atom size={20} />}
                    {subj === "Chemistry" && <Flask size={20} />}
                    {subj === "Mathematics" && <Calculator size={20} />}
                  </div>
                  <span className="text-sm">
                    {subj === "Physics"
                      ? "Phy"
                      : subj === "Chemistry"
                      ? "Chem"
                      : "Math"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Filters Row */}
        <div className="bg-mainBg flex flex-wrap items-center gap-2 px-4 py-3 border-b border-borderColor">
          {/* Class Dropdown */}
          <div className="relative flex-1" ref={classRef}>
            <button
              onClick={() => setShowClassDropdown((v) => !v)}
              className="w-full flex items-center justify-between px-3 py-2 bg-pillBg text-sm rounded-full hover:bg-pillHover transition"
            >
              {selectedClasses.length > 0
                ? `Class: ${selectedClasses.join(", ")}`
                : "Class"}
              <CaretRight
                size={12}
                className={`ml-1 transform ${
                  showClassDropdown ? "rotate-270" : "rotate-90"
                }`}
              />
            </button>
            {showClassDropdown && (
              <div className="absolute mt-1 w-full bg-sidebarItem rounded-md shadow-lg py-1 z-10">
                {uniqueClasses.map((cls) => (
                  <label
                    key={cls}
                    className="flex items-center px-2 py-1 hover:bg-slate-700 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={selectedClasses.includes(cls)}
                      onChange={() => toggleClassSelect(cls)}
                    />
                    <span className="text-sm">{cls}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Units Dropdown */}
          <div className="relative flex-1" ref={unitRef}>
            <button
              onClick={() => setShowUnitDropdown((v) => !v)}
              className="w-full flex items-center justify-between px-3 py-2 bg-pillBg text-sm rounded-full hover:bg-pillHover transition"
            >
              {selectedUnits.length > 0
                ? `Units: ${selectedUnits.join(", ")}`
                : "Units"}
              <CaretRight
                size={12}
                className={`ml-1 transform ${
                  showUnitDropdown ? "rotate-270" : "rotate-90"
                }`}
              />
            </button>
            {showUnitDropdown && (
              <div className="absolute mt-1 w-full bg-sidebarItem rounded-md shadow-lg py-1 z-10">
                {uniqueUnits.map((unit) => (
                  <label
                    key={unit}
                    className="flex items-center px-2 py-1 hover:bg-slate-700 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={selectedUnits.includes(unit)}
                      onChange={() => toggleUnitSelect(unit)}
                    />
                    <span className="text-sm">{unit}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Status Pill */}
          <div className="flex-1">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full px-3 py-2 bg-pillBg text-sm rounded-full focus:outline-none"
            >
              <option value="All">All Status</option>
              <option value="Not Started">Not Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          {/* Weak Chapters Pill */}
          <button
            onClick={() => setWeakOnly((v) => !v)}
            className={`px-3 py-2 bg-pillBg text-sm rounded-full transition ${
              weakOnly ? "bg-red-600" : "hover:bg-pillHover"
            }`}
          >
            Weak Chapters
          </button>

          {/* Sort Button */}
          <button
            onClick={() => setSortAsc((v) => !v)}
            className="flex items-center px-3 py-2 text-sm hover:text-textLight transition"
          >
            <span>Sort</span>
            {sortAsc ? (
              <CaretUp size={14} className="text-green-400 ml-1" />
            ) : (
              <CaretDown size={14} className="text-red-400 ml-1" />
            )}
          </button>
        </div>

        {/* Showing All + Count */}
        <div className="bg-mainBg px-4 py-2 border-b border-borderColor">
          <span className="text-sm text-textMuted">
            Showing all chapters ({chapterCount})
          </span>
        </div>

        {/* ─────────── MOBILE CHAPTER LIST ─────────── */}
        <div className="flex-1 overflow-y-auto bg-mainBg p-4 space-y-3">
          {filteredChapters.length > 0 ? (
            filteredChapters.map((chap) => (
              <div
                key={chap.id}
                className="flex items-center justify-between bg-cardBg hover:bg-slate-700 rounded-lg p-3 border border-borderColor transition"
              >
                {/* Left: Icon + Name */}
                <div className="flex items-center space-x-3">
                  <div className="text-blue-400">{getRandomIcon(chap.id)}</div>
                  <div>
                    <div className="font-medium text-textLight text-sm">
                      {chap.name}
                    </div>
                    <div className="text-xs text-textMuted">
                      {chap.stats.year2025} | {chap.stats.year2024}
                    </div>
                  </div>
                </div>

                {/* Right: Total Qs */}
                <div className="text-xs text-textMuted">
                  {chap.stats.totalQs}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-textMuted py-8">
              No chapters match the selected filters.
            </div>
          )}
        </div>
      </div>

      {/* ─────────── DESKTOP LAYOUT (VISIBLE md: and UP) ─────────── */}
      <div className="hidden md:flex flex-1">
        {/* SIDEBAR */}
        <aside className="w-64 bg-sidebarBg text-textLight flex flex-col">
          <div className="px-4 py-6 border-b border-borderColor">
            <h2 className="text-xl font-semibold">JEE Main</h2>
            <p className="mt-1 text-sm text-textMuted">
              2025 - 2009 | 173 Papers | 15825 Qs
            </p>
          </div>
          <nav className="flex-1 px-2 py-4 space-y-2">
            {subjects.map((subj) => {
              const isActive = selectedSubject === subj;
              return (
                <button
                  key={subj}
                  onClick={() => {
                    setSelectedSubject(subj);
                    setSelectedClasses([]);
                    setSelectedUnits([]);
                    setFilterStatus("All");
                    setWeakOnly(false);
                    setSortAsc(true);
                  }}
                  className={`w-full flex items-center px-3 py-2 rounded-lg transition ${
                    isActive ? "bg-sidebarItem" : "hover:bg-sidebarItem"
                  }`}
                >
                  <span className="mr-3">
                    {subj === "Physics" && <Atom size={20} />}
                    {subj === "Chemistry" && <Flask size={20} />}
                    {subj === "Mathematics" && <Calculator size={20} />}
                  </span>
                  <span className="flex-1 text-left">{subj} PYQs</span>
                  <CaretRight size={16} />
                </button>
              );
            })}
          </nav>
        </aside>

        {/* MAIN PANEL */}
        <main className="flex-1 flex flex-col bg-mainBg">
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-borderColor">
            <div>
              <h1 className="text-2xl font-bold">{selectedSubject} PYQs</h1>
              <p className="text-sm text-textMuted">
                Chapter‐wise Collection of {selectedSubject} PYQs
              </p>
            </div>
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className="p-2 bg-slate-700 rounded-md hover:bg-slate-600 transition"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* FILTER + SORT BAR */}
          <div className="px-6 py-4 flex flex-wrap items-center gap-3 border-b border-borderColor">
            {/* Class Dropdown */}
            <div className="relative" ref={classRef}>
              <button
                onClick={() => setShowClassDropdown((v) => !v)}
                className="flex items-center px-4 py-2 bg-pillBg text-sm rounded-full hover:bg-pillHover transition"
              >
                <span>
                  {selectedClasses.length > 0
                    ? `Class: ${selectedClasses.join(", ")}`
                    : "Class"}
                </span>
                <CaretRight
                  size={12}
                  className={`ml-2 transform ${
                    showClassDropdown ? "rotate-270" : "rotate-90"
                  }`}
                />
              </button>
              {showClassDropdown && (
                <div className="absolute z-20 mt-2 w-40 bg-sidebarItem rounded-md shadow-lg py-2">
                  {uniqueClasses.map((cls) => (
                    <label
                      key={cls}
                      className="flex items-center px-3 py-1 hover:bg-slate-700 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="mr-2"
                        checked={selectedClasses.includes(cls)}
                        onChange={() => toggleClassSelect(cls)}
                      />
                      <span className="text-sm">{cls}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Units Dropdown */}
            <div className="relative" ref={unitRef}>
              <button
                onClick={() => setShowUnitDropdown((v) => !v)}
                className="flex items-center px-4 py-2 bg-pillBg text-sm rounded-full hover:bg-pillHover transition"
              >
                <span>
                  {selectedUnits.length > 0
                    ? `Units: ${selectedUnits.join(", ")}`
                    : "Units"}
                </span>
                <CaretRight
                  size={12}
                  className={`ml-2 transform ${
                    showUnitDropdown ? "rotate-270" : "rotate-90"
                  }`}
                />
              </button>
              {showUnitDropdown && (
                <div className="absolute z-20 mt-2 w-40 bg-sidebarItem rounded-md shadow-lg py-2">
                  {uniqueUnits.map((unit) => (
                    <label
                      key={unit}
                      className="flex items-center px-3 py-1 hover:bg-slate-700 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="mr-2"
                        checked={selectedUnits.includes(unit)}
                        onChange={() => toggleUnitSelect(unit)}
                      />
                      <span className="text-sm">{unit}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Status Pill */}
            <button className="px-4 py-2 bg-pillBg text-sm rounded-full hover:bg-pillHover transition">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="bg-transparent focus:outline-none"
              >
                <option value="All">All Status</option>
                <option value="Not Started">Not Started</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </button>

            {/* Weak Chapters Pill */}
            <button
              onClick={() => setWeakOnly((v) => !v)}
              className={`px-4 py-2 text-sm rounded-full transition ${
                weakOnly ? "bg-red-600" : "bg-pillBg hover:bg-pillHover"
              }`}
            >
              Weak Chapters
            </button>

            {/* Spacer */}
            <div className="flex-1"></div>

            {/* Sort Button */}
            <button
              onClick={() => setSortAsc((v) => !v)}
              className="flex items-center space-x-1 text-sm hover:text-textLight transition"
            >
              <span>Sort</span>
              {sortAsc ? (
                <CaretUp size={16} className="text-green-400" />
              ) : (
                <CaretDown size={16} className="text-red-400" />
              )}
            </button>
          </div>

          {/* Showing All + Count */}
          <div className="px-6 py-3 border-b border-borderColor flex items-center">
            <span className="text-sm text-textMuted">
              Showing all chapters ({chapterCount})
            </span>
          </div>

          {/* Chapter List */}
          <div className="flex-1 px-6 py-4 overflow-y-auto space-y-3">
            {filteredChapters.length > 0 ? (
              filteredChapters.map((chap) => (
                <div
                  key={chap.id}
                  className="flex items-center justify-between bg-cardBg hover:bg-slate-700 rounded-lg p-4 border border-borderColor transition"
                >
                  {/* Left: Icon + Name */}
                  <div className="flex items-center space-x-3">
                    <div className="text-blue-400">
                      {getRandomIcon(chap.id)}
                    </div>
                    <div>
                      <div className="font-medium text-textLight">
                        {chap.name}
                      </div>
                      <div className="text-sm text-textMuted">
                        {chap.stats.year2025} | {chap.stats.year2024}
                      </div>
                    </div>
                  </div>

                  {/* Right: Total Qs */}
                  <div className="text-sm text-textMuted">
                    {chap.stats.totalQs}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-textMuted py-8">
                No chapters match the selected filters.
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
