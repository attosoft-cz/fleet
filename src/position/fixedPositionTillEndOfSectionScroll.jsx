const FixedPositionTillEndOfSectionScroll = () => {
  return (
    <div
      id="overflow auto je hlavni"
      className="box-border h-64 w-48 overflow-auto border-4 border-black"
    >
      <div className="hidden">description: jde hlavne o overwlow-auto</div>
      <div>
        <div className="sticky top-0 h-8 font-bold">
          ted je tady A
          <div className="hidden">description: jde hlavne o sticky</div>
        </div>
        <div>
          <div className="hidden">
            description: tady je nejaky seznam polozek
          </div>
          <div className="border-4 border-dashed">
            <img src="..." />
            <strong>Andrew Alfred</strong>
          </div>
          <div className="border-4 border-dashed">
            <img src="..." />
            <strong>Andrew Alfred</strong>
          </div>
          <div className="border-4 border-dashed">
            <img src="..." />
            <strong>Andrew Alfred</strong>
          </div>
          <div className="border-4 border-dashed">
            <img src="..." />
            <strong>Andrew Alfred</strong>
          </div>
        </div>
      </div>
      <div>
        <div className="sticky top-0  h-8 font-bold">bla bla bla BBB</div>
        <div>
          <div className="border-4">
            <img src="..." />
            <strong>Bob Alfred</strong>
          </div>
          <div className="border-4">
            <img src="..." />
            <strong>Bob Alfred</strong>
          </div>
          <div className="border-4">
            <img src="..." />
            <strong>Bob Alfred</strong>
          </div>
          <div className="border-4">
            <img src="..." />
            <strong>Bob Alfred</strong>
          </div>
          <div className="border-4">
            <img src="..." />
            <strong>Bob Alfred</strong>
          </div>
        </div>
      </div>
      <div>
        <div className="sticky top-0  h-8">C is here</div>
        <div>
          <div className="border-4">
            <img src="..." />
            <strong>Bob Alfred</strong>
          </div>
          <div className="border-4">
            <img src="..." />
            <strong>Bob Alfred</strong>
          </div>
          <div className="border-4">
            <img src="..." />
            <strong>Bob Alfred</strong>
          </div>
          <div className="border-4">
            <img src="..." />
            <strong>Bob Alfred</strong>
          </div>
          <div className="border-4">
            <img src="..." />
            <strong>Bob Alfred</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedPositionTillEndOfSectionScroll;
