export default function HeaderButton() {
  return (
    <>
      {/* all this divs because of effect on button */}
      <button className="relative  py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_16px_#8c45ff]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 border border-white/20 [mask-image:linear-gradient(to_bottom,black,transparent)] rounded-lg">
            <div className="absolute inset-0 border border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]">
              <div className="absolute inset-0 shadow-[0px_0px_40px_rgb(140,70,155,.7)_inset rounded-lg]"></div>
            </div>
          </div>
        </div>
        <span>Join Waitlist</span>
      </button>
    </>
  );
}
