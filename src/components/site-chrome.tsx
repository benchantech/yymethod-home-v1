export function SiteNav() {
  return (
    <div className="flex justify-between items-center flex-wrap gap-3 px-6 md:px-12 py-4 border-b border-border">
      <div className="flex items-center gap-[11px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://yymethod.com/assets/images/favicon-256x256.png" alt="YY mark" className="w-[30px] h-[30px]" />
        <span className="font-mono text-sm font-semibold">
          YY&nbsp;Method™ <span className="text-[#96683f]">· Home Edition</span>{" "}
          <span className="text-[#b39b7a] font-normal">v2.3</span>
        </span>
      </div>
      <div className="font-mono flex gap-7 text-xs">
        <a href="https://yymethod.com" className="text-[#8a7358] hover:text-foreground">Method</a>
        <a href="https://yymethod.com/violin" className="text-[#8a7358] hover:text-foreground">Violin</a>
        <span className="border-b border-foreground pb-0.5">Cases &amp; ADRs</span>
        <a href="https://benchantech.com" className="text-[#8a7358] hover:text-foreground">Ben Chan</a>
      </div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <div className="border-t border-border mt-auto">
      <div className="font-mono max-w-[860px] mx-auto flex justify-between items-center flex-wrap gap-2.5 px-6 md:px-12 py-[18px] text-[11px] text-[#8a7358]">
        <span>Human captures. AI reads.</span>
        <span>
          <a href="https://benchantech.com" className="hover:text-foreground">benchantech.com</a>
          {" · "}
          <a href="https://yymethod.com" className="hover:text-foreground">yymethod.com</a>
        </span>
      </div>
    </div>
  );
}
