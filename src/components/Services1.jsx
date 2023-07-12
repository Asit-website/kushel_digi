import React, { useState } from "react";
import gitas from "../images/gitas.png";
import ravia from "../images/ravia.png";
import vectorsIm from "../images/vectorsIm.png";
const Services1 = () => {
  const [fat, setFat] = useState(1);

  // ============submenu=========
  const [gat, setGat] = useState(1);
  const [sat, setSat] = useState(1);
  const [rat, setRat] = useState(1);
  const [lat, setLat] = useState(1);
  const [pat,setPat] = useState(1);

  const tabAnother1 = () => {
    setFat(1);
    document.getElementById("punch1").style.background = "#1F678D";
    document.getElementById("punch2").style.background = "none";
    document.getElementById("punch3").style.background = "none";
    document.getElementById("punch4").style.background = "none";
    document.getElementById("punch5").style.background = "none";

    // ==================now concept for removing border bottom==========
    document.getElementById("punch1").style.borderBottom = "4px solid #1F678D";
    document.getElementById("punch2").style.borderBottom = "4px solid #0B60FF";
    document.getElementById("punch3").style.borderBottom = "4px solid #0B60FF";
    document.getElementById("punch4").style.borderBottom = "4px solid #0B60FF";
    document.getElementById("punch5").style.borderBottom = "4px solid #0B60FF";
    // ===============end==========================================

    document.querySelector(".fa1").style.color = "#FFFFFF";
    document.querySelector(".fa2").style.color = "#1F678D";
    document.querySelector(".fa3").style.color = "#1F678D";
    document.querySelector(".fa4").style.color = "#1F678D";
    document.querySelector(".fa5").style.color = "#1F678D";

    document.querySelector(".fa1").style.opacity = "50%";
    document.querySelector(".fa2").style.opacity = "10%";
    document.querySelector(".fa3").style.opacity = "10%";
    document.querySelector(".fa4").style.opacity = "10%";
    document.querySelector(".fa5").style.opacity = "10%";

    document.querySelector("#tace1").style.color = "#FFFFFF";
    document.querySelector("#tace2").style.color = "#1F678D";
    document.querySelector("#tace3").style.color = "#1F678D";
    document.querySelector("#tace4").style.color = "#1F678D";
    document.querySelector("#tace5").style.color = "#1F678D";

    if (gat === 1) {
      setTimeout(() => {
        subMenu1();
      }, 50);
    } else if (gat === 2) {
      setTimeout(() => {
        subMenu2();
      }, 50);
    } else if (gat === 3) {
      setTimeout(() => {
        subMenu3();
      }, 50);
    } else if (gat === 4) {
      setTimeout(() => {
        subMenu4();
      }, 50);
    } else if (gat === 5) {
      setTimeout(() => {
        subMenu5();
      }, 50);
    }
  };
  const tabAnother2 = (e) => {
    e.preventDefault();
    setFat(2);
    document.getElementById("punch1").style.background = "none";
    document.getElementById("punch2").style.background = "#1F678D";
    document.getElementById("punch3").style.background = "none";
    document.getElementById("punch4").style.background = "none";
    document.getElementById("punch5").style.background = "none";

    // ==================now concept for removing border bottom==========
    document.getElementById("punch1").style.borderBottom = "4px solid #0B60FF";
    document.getElementById("punch2").style.borderBottom = "4px solid #1F678D";
    document.getElementById("punch3").style.borderBottom = "4px solid #0B60FF";
    document.getElementById("punch4").style.borderBottom = "4px solid #0B60FF";
    document.getElementById("punch5").style.borderBottom = "4px solid #0B60FF";
    // ===============end==========================================

    document.querySelector(".fa1").style.color = "#1F678D";
    document.querySelector(".fa2").style.color = "#FFFFFF";
    document.querySelector(".fa3").style.color = "#1F678D";
    document.querySelector(".fa4").style.color = "#1F678D";
    document.querySelector(".fa5").style.color = "#1F678D";

    document.querySelector(".fa1").style.opacity = "10%";
    document.querySelector(".fa2").style.opacity = "50%";
    document.querySelector(".fa3").style.opacity = "10%";
    document.querySelector(".fa4").style.opacity = "10%";
    document.querySelector(".fa5").style.opacity = "10%";

    document.querySelector("#tace1").style.color = "#1F678D";
    document.querySelector("#tace2").style.color = "#FFFFFF";
    document.querySelector("#tace3").style.color = "#1F678D";
    document.querySelector("#tace4").style.color = "#1F678D";
    document.querySelector("#tace5").style.color = "#1F678D";

    if (sat === 1) {
      setTimeout(() => {
        subMenu11();
      }, 50);
    } else if (sat === 2) {
      setTimeout(() => {
        subMenu22();
      }, 50);
    } else if (sat === 3) {
      setTimeout(() => {
        subMenu33();
      }, 50);
    } else if (sat === 4) {
      setTimeout(() => {
        subMenu44();
      }, 50);
    } else if (sat === 5) {
      setTimeout(() => {
        subMenu55();
      }, 50);
    }
  };
  const tabAnother3 = (e) => {
    e.preventDefault();
    setFat(3);

    if (rat === 1) {
      setTimeout(() => {
        subMenu111();
      }, 50);
    } else if (rat === 2) {
      setTimeout(() => {
        subMenu222();
      }, 50);
    } else if (rat === 3) {
      setTimeout(() => {
        subMenu333();
      }, 50);
    } else if (rat === 4) {
      setTimeout(() => {
        subMenu444();
      }, 50);
    } else if (rat === 5) {
      setTimeout(() => {
        subMenu555();
      }, 50);
    }
    document.getElementById("punch1").style.background = "none";
    document.getElementById("punch2").style.background = "none";
    document.getElementById("punch3").style.background = "#1F678D";
    document.getElementById("punch4").style.background = "none";
    document.getElementById("punch5").style.background = "none";

    // ==================now concept for removing border bottom==========
    document.getElementById("punch1").style.borderBottom = "4px solid #0B60FF";
    document.getElementById("punch2").style.borderBottom = "4px solid #0B60FF";
    document.getElementById("punch3").style.borderBottom = "4px solid #1F678D";
    document.getElementById("punch4").style.borderBottom = "4px solid #0B60FF";
    document.getElementById("punch5").style.borderBottom = "4px solid #0B60FF";
    // ===============end==========================================

    document.querySelector(".fa1").style.color = "#1F678D";
    document.querySelector(".fa2").style.color = "#1F678D";
    document.querySelector(".fa3").style.color = "#FFFFFF";
    document.querySelector(".fa4").style.color = "#1F678D";
    document.querySelector(".fa5").style.color = "#1F678D";

    document.querySelector(".fa1").style.opacity = "10%";
    document.querySelector(".fa2").style.opacity = "10%";
    document.querySelector(".fa3").style.opacity = "50%";
    document.querySelector(".fa4").style.opacity = "10%";
    document.querySelector(".fa5").style.opacity = "10%";

    document.querySelector("#tace1").style.color = "#1F678D";
    document.querySelector("#tace2").style.color = "#1F678D";
    document.querySelector("#tace3").style.color = "#FFFFFF";
    document.querySelector("#tace4").style.color = "#1F678D";
    document.querySelector("#tace5").style.color = "#1F678D";


  };
  const tabAnother4 = (e) => {
    setFat(4);
    document.getElementById("punch1").style.background = "none";
    document.getElementById("punch2").style.background = "none";
    document.getElementById("punch3").style.background = "none";
    document.getElementById("punch4").style.background = "#1F678D";
    document.getElementById("punch5").style.background = "none";

    // ==================now concept for removing border bottom==========
    document.getElementById("punch1").style.borderBottom = "4px solid #0B60FF";
    document.getElementById("punch2").style.borderBottom = "4px solid #0B60FF";
    document.getElementById("punch3").style.borderBottom = "4px solid #0B60FF";
    document.getElementById("punch4").style.borderBottom = "4px solid #1F678D";
    document.getElementById("punch5").style.borderBottom = "4px solid #0B60FF";
    // ===============end==========================================

    document.querySelector(".fa1").style.color = "#1F678D";
    document.querySelector(".fa2").style.color = "#1F678D";
    document.querySelector(".fa3").style.color = "#1F678D";
    document.querySelector(".fa4").style.color = "#FFFFFF";
    document.querySelector(".fa5").style.color = "#1F678D";

    document.querySelector(".fa1").style.opacity = "10%";
    document.querySelector(".fa2").style.opacity = "10%";
    document.querySelector(".fa3").style.opacity = "10%";
    document.querySelector(".fa4").style.opacity = "50%";
    document.querySelector(".fa5").style.opacity = "10%";

    document.querySelector("#tace1").style.color = "#1F678D";
    document.querySelector("#tace2").style.color = "#1F678D";
    document.querySelector("#tace3").style.color = "#1F678D";
    document.querySelector("#tace4").style.color = "#FFFFFF";
    document.querySelector("#tace5").style.color = "#1F678D";

    if (lat === 1) {
      setTimeout(() => {
        subMenu1111();
      }, 50);
    } else if (lat === 2) {
      setTimeout(() => {
        subMenu2222();
      }, 50);
    } else if (lat === 3) {
      setTimeout(() => {
        subMenu3333();
      }, 50);
    } else if (lat === 4) {
      setTimeout(() => {
        subMenu4444();
      }, 50);
    }
  };
  const tabAnother5 = (e) => {
    setFat(5);
    document.getElementById("punch1").style.background = "none";
    document.getElementById("punch2").style.background = "none";
    document.getElementById("punch3").style.background = "none";
    document.getElementById("punch4").style.background = "none";
    document.getElementById("punch5").style.background = "#1F678D";

    // ==================now concept for removing border bottom==========
    document.getElementById("punch1").style.borderBottom = "4px solid #0B60FF";
    document.getElementById("punch2").style.borderBottom = "4px solid #0B60FF";
    document.getElementById("punch3").style.borderBottom = "4px solid #0B60FF";
    document.getElementById("punch4").style.borderBottom = "4px solid #0B60FF";
    document.getElementById("punch5").style.borderBottom = "4px solid #1F678D";
    // ===============end==========================================

    document.querySelector(".fa1").style.color = "#1F678D";
    document.querySelector(".fa2").style.color = "#1F678D";
    document.querySelector(".fa3").style.color = "#1F678D";
    document.querySelector(".fa4").style.color = "#1F678D";
    document.querySelector(".fa5").style.color = "#FFFFFF";

    document.querySelector(".fa1").style.opacity = "10%";
    document.querySelector(".fa2").style.opacity = "10%";
    document.querySelector(".fa3").style.opacity = "10%";
    document.querySelector(".fa4").style.opacity = "10%";
    document.querySelector(".fa5").style.opacity = "50%";

    document.querySelector("#tace1").style.color = "#1F678D";
    document.querySelector("#tace2").style.color = "#1F678D";
    document.querySelector("#tace3").style.color = "#1F678D";
    document.querySelector("#tace4").style.color = "#1F678D";
    document.querySelector("#tace5").style.color = "#FFFFFF";

    if (pat === 1) {
      setTimeout(() => {
        subMenu11111();
      }, 50);
    } else if (pat === 2) {
      setTimeout(() => {
        subMenu22222();
      }, 50);
    } else if (pat === 3) {
      setTimeout(() => {
        subMenu33333();
      }, 50);
    }
  };

  // ====================submenu1================
  const subMenu1 = () => {
    setGat(1);
    document.getElementById("pehla").style.color = "#1F678D";
    document.getElementById("fehla").style.color = "#33475B";
    document.getElementById("gehla").style.color = "#33475B";
    document.getElementById("hehla").style.color = "#33475B";
    document.getElementById("sehla").style.color = "#33475B";

    document.getElementById("pehla").style.fontWeight = "bold";
    document.getElementById("fehla").style.fontWeight = "400";
    document.getElementById("gehla").style.fontWeight = "400";
    document.getElementById("hehla").style.fontWeight = "400";
    document.getElementById("sehla").style.fontWeight = "400";

    document.getElementById("pehla1").style.color = "#1F678D";
    document.getElementById("fehla1").style.color = "#33475B";
    document.getElementById("gehla1").style.color = "#33475B";
    document.getElementById("hehla1").style.color = "#33475B";
    document.getElementById("sehla1").style.color = "#33475B";

    document.getElementById("pehla1").style.fontWeight = "bold";
    document.getElementById("fehla1").style.fontWeight = "400";
    document.getElementById("gehla1").style.fontWeight = "400";
    document.getElementById("hehla1").style.fontWeight = "400";
    document.getElementById("sehla1").style.fontWeight = "400";
  };
  const subMenu2 = () => {
    setGat(2);
    document.getElementById("pehla").style.color = "#33475B";
    document.getElementById("fehla").style.color = "#1F678D";
    document.getElementById("gehla").style.color = "#33475B";
    document.getElementById("hehla").style.color = "#33475B";
    document.getElementById("sehla").style.color = "#33475B";

    document.getElementById("pehla").style.fontWeight = "400";
    document.getElementById("fehla").style.fontWeight = "bold";
    document.getElementById("gehla").style.fontWeight = "400";
    document.getElementById("hehla").style.fontWeight = "400";
    document.getElementById("sehla").style.fontWeight = "400";

    document.getElementById("pehla1").style.color = "#33475B";
    document.getElementById("fehla1").style.color = "#1F678D";
    document.getElementById("gehla1").style.color = "#33475B";
    document.getElementById("hehla1").style.color = "#33475B";
    document.getElementById("sehla1").style.color = "#33475B";

    document.getElementById("pehla1").style.fontWeight = "400";
    document.getElementById("fehla1").style.fontWeight = "bold";
    document.getElementById("gehla1").style.fontWeight = "400";
    document.getElementById("hehla1").style.fontWeight = "400";
    document.getElementById("sehla1").style.fontWeight = "400";
  };
  const subMenu3 = () => {
    setGat(3);
    document.getElementById("pehla").style.color = "#33475B";
    document.getElementById("fehla").style.color = "#33475B";
    document.getElementById("gehla").style.color = "#1F678D";
    document.getElementById("hehla").style.color = "#33475B";
    document.getElementById("sehla").style.color = "#33475B";

    document.getElementById("pehla").style.fontWeight = "400";
    document.getElementById("fehla").style.fontWeight = "400";
    document.getElementById("gehla").style.fontWeight = "bold";
    document.getElementById("hehla").style.fontWeight = "400";
    document.getElementById("sehla").style.fontWeight = "400";

    document.getElementById("pehla1").style.color = "#33475B";
    document.getElementById("fehla1").style.color = "#33475B";
    document.getElementById("gehla1").style.color = "#1F678D";
    document.getElementById("hehla1").style.color = "#33475B";
    document.getElementById("sehla1").style.color = "#33475B";

    document.getElementById("pehla1").style.fontWeight = "400";
    document.getElementById("fehla1").style.fontWeight = "400";
    document.getElementById("gehla1").style.fontWeight = "bold";
    document.getElementById("hehla1").style.fontWeight = "400";
    document.getElementById("sehla1").style.fontWeight = "400";
  };
  const subMenu4 = () => {
    setGat(4);
    document.getElementById("pehla").style.color = "#33475B";
    document.getElementById("fehla").style.color = "#33475B";
    document.getElementById("gehla").style.color = "#33475B";
    document.getElementById("hehla").style.color = "#1F678D";
    document.getElementById("sehla").style.color = "#33475B";

    document.getElementById("pehla").style.fontWeight = "400";
    document.getElementById("fehla").style.fontWeight = "400";
    document.getElementById("gehla").style.fontWeight = "400";
    document.getElementById("hehla").style.fontWeight = "bold";
    document.getElementById("sehla").style.fontWeight = "400";

    document.getElementById("pehla1").style.color = "#33475B";
    document.getElementById("fehla1").style.color = "#33475B";
    document.getElementById("gehla1").style.color = "#33475B";
    document.getElementById("hehla1").style.color = "#1F678D";
    document.getElementById("sehla1").style.color = "#33475B";

    document.getElementById("pehla1").style.fontWeight = "400";
    document.getElementById("fehla1").style.fontWeight = "400";
    document.getElementById("gehla1").style.fontWeight = "400";
    document.getElementById("hehla1").style.fontWeight = "bold";
    document.getElementById("sehla1").style.fontWeight = "400";
  };
  const subMenu5 = () => {
    setGat(5);
    document.getElementById("pehla").style.color = "#33475B";
    document.getElementById("fehla").style.color = "#33475B";
    document.getElementById("gehla").style.color = "#33475B";
    document.getElementById("hehla").style.color = "#33475B";
    document.getElementById("sehla").style.color = "#1F678D";

    document.getElementById("pehla").style.fontWeight = "400";
    document.getElementById("fehla").style.fontWeight = "400";
    document.getElementById("gehla").style.fontWeight = "400";
    document.getElementById("hehla").style.fontWeight = "400";
    document.getElementById("sehla").style.fontWeight = "bold";

    document.getElementById("pehla1").style.color = "#33475B";
    document.getElementById("fehla1").style.color = "#33475B";
    document.getElementById("gehla1").style.color = "#33475B";
    document.getElementById("hehla1").style.color = "#33475B";
    document.getElementById("sehla1").style.color = "#1F678D";

    document.getElementById("pehla1").style.fontWeight = "400";
    document.getElementById("fehla1").style.fontWeight = "400";
    document.getElementById("gehla1").style.fontWeight = "400";
    document.getElementById("hehla1").style.fontWeight = "400";
    document.getElementById("sehla1").style.fontWeight = "bold";
  };
  // ========================subMenu1 end===============

  // ===================subMenu2=====================

  const subMenu11 = () => {
    setSat(1);

    document.getElementById("tub1").style.color = "#1F678D";
    document.getElementById("tub11").style.color = "#33475B";
    document.getElementById("tub111").style.color = "#33475B";
    document.getElementById("tub1111").style.color = "#33475B";
    document.getElementById("tub11111").style.color = "#33475B";

    document.getElementById("tub1").style.fontWeight = "bold";
    document.getElementById("tub11").style.fontWeight = "400";
    document.getElementById("tub111").style.fontWeight = "400";
    document.getElementById("tub1111").style.fontWeight = "400";
    document.getElementById("tub11111").style.fontWeight = "400";

    document.getElementById("sub1").style.color = "#1F678D";
    document.getElementById("sub11").style.color = "#33475B";
    document.getElementById("sub111").style.color = "#33475B";
    document.getElementById("sub1111").style.color = "#33475B";
    document.getElementById("sub11111").style.color = "#33475B";

    document.getElementById("sub1").style.fontWeight = "bold";
    document.getElementById("sub11").style.fontWeight = "400";
    document.getElementById("sub111").style.fontWeight = "400";
    document.getElementById("sub1111").style.fontWeight = "400";
    document.getElementById("sub11111").style.fontWeight = "400";
  };
  const subMenu22 = () => {
    setSat(2);
    document.getElementById("tub1").style.color = "#33475B";
    document.getElementById("tub11").style.color = "#1F678D";
    document.getElementById("tub111").style.color = "#33475B";
    document.getElementById("tub1111").style.color = "#33475B";
    document.getElementById("tub11111").style.color = "#33475B";

    document.getElementById("tub1").style.fontWeight = "400";
    document.getElementById("tub11").style.fontWeight = "bold";
    document.getElementById("tub111").style.fontWeight = "400";
    document.getElementById("tub1111").style.fontWeight = "400";
    document.getElementById("tub11111").style.fontWeight = "400";

    document.getElementById("sub1").style.color = "#33475B";
    document.getElementById("sub11").style.color = "#1F678D";
    document.getElementById("sub111").style.color = "#33475B";
    document.getElementById("sub1111").style.color = "#33475B";
    document.getElementById("sub11111").style.color = "#33475B";

    document.getElementById("sub1").style.fontWeight = "400";
    document.getElementById("sub11").style.fontWeight = "bold";
    document.getElementById("sub111").style.fontWeight = "400";
    document.getElementById("sub1111").style.fontWeight = "400";
    document.getElementById("sub11111").style.fontWeight = "400";
  };
  const subMenu33 = () => {
    setSat(3);
    document.getElementById("tub1").style.color = "#33475B";
    document.getElementById("tub11").style.color = "#33475B";
    document.getElementById("tub111").style.color = "#1F678D";
    document.getElementById("tub1111").style.color = "#33475B";
    document.getElementById("tub11111").style.color = "#33475B";

    document.getElementById("tub1").style.fontWeight = "400";
    document.getElementById("tub11").style.fontWeight = "400";
    document.getElementById("tub111").style.fontWeight = "bold";
    document.getElementById("tub1111").style.fontWeight = "400";
    document.getElementById("tub11111").style.fontWeight = "400";

    document.getElementById("sub1").style.color = "#33475B";
    document.getElementById("sub11").style.color = "#33475B";
    document.getElementById("sub111").style.color = "#1F678D";
    document.getElementById("sub1111").style.color = "#33475B";
    document.getElementById("sub11111").style.color = "#33475B";

    document.getElementById("sub1").style.fontWeight = "400";
    document.getElementById("sub11").style.fontWeight = "400";
    document.getElementById("sub111").style.fontWeight = "bold";
    document.getElementById("sub1111").style.fontWeight = "400";
    document.getElementById("sub11111").style.fontWeight = "400";
  };
  const subMenu44 = () => {
    setSat(4);
    document.getElementById("tub1").style.color = "#33475B";
    document.getElementById("tub11").style.color = "#33475B";
    document.getElementById("tub111").style.color = "#33475B";
    document.getElementById("tub1111").style.color = "#1F678D";
    document.getElementById("tub11111").style.color = "#33475B";

    document.getElementById("tub1").style.fontWeight = "400";
    document.getElementById("tub11").style.fontWeight = "400";
    document.getElementById("tub111").style.fontWeight = "400";
    document.getElementById("tub1111").style.fontWeight = "bold";
    document.getElementById("tub11111").style.fontWeight = "400";

    document.getElementById("sub1").style.color = "#33475B";
    document.getElementById("sub11").style.color = "#33475B";
    document.getElementById("sub111").style.color = "#33475B";
    document.getElementById("sub1111").style.color = "#1F678D";
    document.getElementById("sub11111").style.color = "#33475B";

    document.getElementById("sub1").style.fontWeight = "400";
    document.getElementById("sub11").style.fontWeight = "400";
    document.getElementById("sub111").style.fontWeight = "400";
    document.getElementById("sub1111").style.fontWeight = "bold";
    document.getElementById("sub11111").style.fontWeight = "400";
  };
  const subMenu55 = () => {
    setSat(5);
    document.getElementById("tub1").style.color = "#33475B";
    document.getElementById("tub11").style.color = "#33475B";
    document.getElementById("tub111").style.color = "#33475B";
    document.getElementById("tub1111").style.color = "#33475B";
    document.getElementById("tub11111").style.color = "#1F678D";

    document.getElementById("tub1").style.fontWeight = "400";
    document.getElementById("tub11").style.fontWeight = "400";
    document.getElementById("tub111").style.fontWeight = "400";
    document.getElementById("tub1111").style.fontWeight = "400";
    document.getElementById("tub11111").style.fontWeight = "bold";

    document.getElementById("sub1").style.color = "#33475B";
    document.getElementById("sub11").style.color = "#33475B";
    document.getElementById("sub111").style.color = "#33475B";
    document.getElementById("sub1111").style.color = "#33475B";
    document.getElementById("sub11111").style.color = "#1F678D";

    document.getElementById("sub1").style.fontWeight = "400";
    document.getElementById("sub11").style.fontWeight = "400";
    document.getElementById("sub111").style.fontWeight = "400";
    document.getElementById("sub1111").style.fontWeight = "400";
    document.getElementById("sub11111").style.fontWeight = "bold";
  };

  const subMenu111 = () => {
    setRat(1);
    document.getElementById("pub1").style.color = "#1F678D";
    document.getElementById("pub11").style.color = "#33475B";
    document.getElementById("pub111").style.color = "#33475B";
    document.getElementById("pub1111").style.color = "#33475B";
    document.getElementById("pub11111").style.color = "#33475B";

    document.getElementById("pub1").style.fontWeight = "bold";
    document.getElementById("pub11").style.fontWeight = "400";
    document.getElementById("pub111").style.fontWeight = "400";
    document.getElementById("pub1111").style.fontWeight = "400";
    document.getElementById("pub11111").style.fontWeight = "400";

    document.getElementById("gub1").style.color = "#1F678D";
    document.getElementById("gub11").style.color = "#33475B";
    document.getElementById("gub111").style.color = "#33475B";
    document.getElementById("gub1111").style.color = "#33475B";
    document.getElementById("gub11111").style.color = "#33475B";

    document.getElementById("gub1").style.fontWeight = "bold";
    document.getElementById("gub11").style.fontWeight = "400";
    document.getElementById("gub111").style.fontWeight = "400";
    document.getElementById("gub1111").style.fontWeight = "400";
    document.getElementById("gub11111").style.fontWeight = "400";
  };
  const subMenu222 = () => {
    setRat(2);
    document.getElementById("pub1").style.color = "#33475B";
    document.getElementById("pub11").style.color = "#1F678D";
    document.getElementById("pub111").style.color = "#33475B";
    document.getElementById("pub1111").style.color = "#33475B";
    document.getElementById("pub11111").style.color = "#33475B";

    document.getElementById("pub1").style.fontWeight = "400";
    document.getElementById("pub11").style.fontWeight = "bold";
    document.getElementById("pub111").style.fontWeight = "400";
    document.getElementById("pub1111").style.fontWeight = "400";
    document.getElementById("pub11111").style.fontWeight = "400";

    document.getElementById("gub1").style.color = "#33475B";
    document.getElementById("gub11").style.color = "#1F678D";
    document.getElementById("gub111").style.color = "#33475B";
    document.getElementById("gub1111").style.color = "#33475B";
    document.getElementById("gub11111").style.color = "#33475B";

    document.getElementById("gub1").style.fontWeight = "400";
    document.getElementById("gub11").style.fontWeight = "bold";
    document.getElementById("gub111").style.fontWeight = "400";
    document.getElementById("gub1111").style.fontWeight = "400";
    document.getElementById("gub11111").style.fontWeight = "400";
  };
  const subMenu333 = () => {
    setRat(3);
    document.getElementById("pub1").style.color = "#33475B";
    document.getElementById("pub11").style.color = "#33475B";
    document.getElementById("pub111").style.color = "#1F678D";
    document.getElementById("pub1111").style.color = "#33475B";
    document.getElementById("pub11111").style.color = "#33475B";

    document.getElementById("pub1").style.fontWeight = "400";
    document.getElementById("pub11").style.fontWeight = "400";
    document.getElementById("pub111").style.fontWeight = "bold";
    document.getElementById("pub1111").style.fontWeight = "400";
    document.getElementById("pub11111").style.fontWeight = "400";

    document.getElementById("gub1").style.color = "#33475B";
    document.getElementById("gub11").style.color = "#33475B";
    document.getElementById("gub111").style.color = "#1F678D";
    document.getElementById("gub1111").style.color = "#33475B";
    document.getElementById("gub11111").style.color = "#33475B";

    document.getElementById("gub1").style.fontWeight = "400";
    document.getElementById("gub11").style.fontWeight = "400";
    document.getElementById("gub111").style.fontWeight = "bold";
    document.getElementById("gub1111").style.fontWeight = "400";
    document.getElementById("gub11111").style.fontWeight = "400";
  };
  const subMenu444 = () => {
    setRat(4);
    document.getElementById("pub1").style.color = "#33475B";
    document.getElementById("pub11").style.color = "#33475B";
    document.getElementById("pub111").style.color = "#33475B";
    document.getElementById("pub1111").style.color = "#1F678D";
    document.getElementById("pub11111").style.color = "#33475B";

    document.getElementById("pub1").style.fontWeight = "400";
    document.getElementById("pub11").style.fontWeight = "400";
    document.getElementById("pub111").style.fontWeight = "400";
    document.getElementById("pub1111").style.fontWeight = "bold";
    document.getElementById("pub11111").style.fontWeight = "400";

    document.getElementById("gub1").style.color = "#33475B";
    document.getElementById("gub11").style.color = "#33475B";
    document.getElementById("gub111").style.color = "#33475B";
    document.getElementById("gub1111").style.color = "#1F678D";
    document.getElementById("gub11111").style.color = "#33475B";

    document.getElementById("gub1").style.fontWeight = "400";
    document.getElementById("gub11").style.fontWeight = "400";
    document.getElementById("gub111").style.fontWeight = "400";
    document.getElementById("gub1111").style.fontWeight = "bold";
    document.getElementById("gub11111").style.fontWeight = "400";
  };
  const subMenu555 = () => {
    setRat(5);
    document.getElementById("pub1").style.color = "#33475B";
    document.getElementById("pub11").style.color = "#33475B";
    document.getElementById("pub111").style.color = "#33475B";
    document.getElementById("pub1111").style.color = "#33475B";
    document.getElementById("pub11111").style.color = "#1F678D";

    document.getElementById("pub1").style.fontWeight = "400";
    document.getElementById("pub11").style.fontWeight = "400";
    document.getElementById("pub111").style.fontWeight = "400";
    document.getElementById("pub1111").style.fontWeight = "400";
    document.getElementById("pub11111").style.fontWeight = "bold";

    document.getElementById("gub1").style.color = "#33475B";
    document.getElementById("gub11").style.color = "#33475B";
    document.getElementById("gub111").style.color = "#33475B";
    document.getElementById("gub1111").style.color = "#33475B";
    document.getElementById("gub11111").style.color = "#1F678D";

    document.getElementById("gub1").style.fontWeight = "400";
    document.getElementById("gub11").style.fontWeight = "400";
    document.getElementById("gub111").style.fontWeight = "400";
    document.getElementById("gub1111").style.fontWeight = "400";
    document.getElementById("gub11111").style.fontWeight = "bold";
  };

  const subMenu1111 = () => {
    setLat(1);
    document.getElementById("mub1").style.color = "#1F678D";
    document.getElementById("mub11").style.color = "#33475B";
    document.getElementById("mub111").style.color = "#33475B";
    document.getElementById("mub1111").style.color = "#33475B";
  

    document.getElementById("mub1").style.fontWeight = "bold";
    document.getElementById("mub11").style.fontWeight = "400";
    document.getElementById("mub111").style.fontWeight = "400";
    document.getElementById("mub1111").style.fontWeight = "400";
    

    document.getElementById("nub1").style.color = "#1F678D";
    document.getElementById("nub11").style.color = "#33475B";
    document.getElementById("nub111").style.color = "#33475B";
    document.getElementById("nub1111").style.color = "#33475B";
    

    document.getElementById("nub1").style.fontWeight = "bold";
    document.getElementById("nub11").style.fontWeight = "400";
    document.getElementById("nub111").style.fontWeight = "400";
    document.getElementById("nub1111").style.fontWeight = "400";
    
  };
  const subMenu2222 = () => {
    setLat(2);
    console.log("hi");
    document.getElementById("mub1").style.color = "#33475B";
    document.getElementById("mub11").style.color = "#1F678D";
    document.getElementById("mub111").style.color = "#33475B";
    document.getElementById("mub1111").style.color = "#33475B";
   

    document.getElementById("mub1").style.fontWeight = "400";
    document.getElementById("mub11").style.fontWeight = "bold";
    document.getElementById("mub111").style.fontWeight = "400";
    document.getElementById("mub1111").style.fontWeight = "400";
   

    document.getElementById("nub1").style.color = "#33475B";
    document.getElementById("nub11").style.color = "#1F678D";
    document.getElementById("nub111").style.color = "#33475B";
    document.getElementById("nub1111").style.color = "#33475B";
   

    document.getElementById("nub1").style.fontWeight = "400";
    document.getElementById("nub11").style.fontWeight = "bold";
    document.getElementById("nub111").style.fontWeight = "400";
    document.getElementById("nub1111").style.fontWeight = "400";
  };
  const subMenu3333 = () => {
    setLat(3);
    document.getElementById("mub1").style.color = "#33475B";
    document.getElementById("mub11").style.color = "#33475B";
    document.getElementById("mub111").style.color = "#1F678D";
    document.getElementById("mub1111").style.color = "#33475B";
   

    document.getElementById("mub1").style.fontWeight = "400";
    document.getElementById("mub11").style.fontWeight = "400";
    document.getElementById("mub111").style.fontWeight = "bold";
    document.getElementById("mub1111").style.fontWeight = "400";
    

    document.getElementById("nub1").style.color = "#33475B";
    document.getElementById("nub11").style.color = "#33475B";
    document.getElementById("nub111").style.color = "#1F678D";
    document.getElementById("nub1111").style.color = "#33475B";
    

    document.getElementById("nub1").style.fontWeight = "400";
    document.getElementById("nub11").style.fontWeight = "400";
    document.getElementById("nub111").style.fontWeight = "bold";
    document.getElementById("nub1111").style.fontWeight = "400";
    
  };
  const subMenu4444 = () => {
    setLat(4);
    document.getElementById("mub1").style.color = "#33475B";
    document.getElementById("mub11").style.color = "#33475B";
    document.getElementById("mub111").style.color = "#33475B";
    document.getElementById("mub1111").style.color = "#1F678D";
    

    document.getElementById("mub1").style.fontWeight = "400";
    document.getElementById("mub11").style.fontWeight = "400";
    document.getElementById("mub111").style.fontWeight = "400";
    document.getElementById("mub1111").style.fontWeight = "bold";
   

    document.getElementById("nub1").style.color = "#33475B";
    document.getElementById("nub11").style.color = "#33475B";
    document.getElementById("nub111").style.color = "#33475B";
    document.getElementById("nub1111").style.color = "#1F678D";
    

    document.getElementById("nub1").style.fontWeight = "400";
    document.getElementById("nub11").style.fontWeight = "400";
    document.getElementById("nub111").style.fontWeight = "400";
    document.getElementById("nub1111").style.fontWeight = "bold";
    
  };
  // ===================subMenu2 end=======================


  const subMenu11111 = () => {
    setPat(1);
    document.getElementById("pun1").style.color = "#1F678D";
    document.getElementById("pun11").style.color = "#33475B";
    document.getElementById("pun111").style.color = "#33475B";
   
  

    document.getElementById("pun1").style.fontWeight = "bold";
    document.getElementById("pun11").style.fontWeight = "400";
    document.getElementById("pun111").style.fontWeight = "400";
   
    

    document.getElementById("gun1").style.color = "#1F678D";
    document.getElementById("gun11").style.color = "#33475B";
    document.getElementById("gun111").style.color = "#33475B";
   
    

    document.getElementById("gun1").style.fontWeight = "bold";
    document.getElementById("gun11").style.fontWeight = "400";
    document.getElementById("gun111").style.fontWeight = "400";
   
    
  };
  const subMenu22222 = () => {
    setPat(2);
    console.log("hi");
    document.getElementById("pun1").style.color = "#33475B";
    document.getElementById("pun11").style.color = "#1F678D";
    document.getElementById("pun111").style.color = "#33475B";
    
   

    document.getElementById("pun1").style.fontWeight = "400";
    document.getElementById("pun11").style.fontWeight = "bold";
    document.getElementById("pun111").style.fontWeight = "400";
    
   

    document.getElementById("gun1").style.color = "#33475B";
    document.getElementById("gun11").style.color = "#1F678D";
    document.getElementById("gun111").style.color = "#33475B";
   
   

    document.getElementById("gun1").style.fontWeight = "400";
    document.getElementById("gun11").style.fontWeight = "bold";
    document.getElementById("gun111").style.fontWeight = "400";
    
  };
  const subMenu33333 = () => {
    setPat(3);
    document.getElementById("pun1").style.color = "#33475B";
    document.getElementById("pun11").style.color = "#33475B";
    document.getElementById("pun111").style.color = "#1F678D";
    
   

    document.getElementById("pun1").style.fontWeight = "400";
    document.getElementById("pun11").style.fontWeight = "400";
    document.getElementById("pun111").style.fontWeight = "bold";
   
    

    document.getElementById("gun1").style.color = "#33475B";
    document.getElementById("gun11").style.color = "#33475B";
    document.getElementById("gun111").style.color = "#1F678D";
  
    

    document.getElementById("gun1").style.fontWeight = "400";
    document.getElementById("gun11").style.fontWeight = "400";
    document.getElementById("gun111").style.fontWeight = "bold";
   
    
  };
  return (
    <>
      <div className="ser-main">
        <div className="serviting_back">
          <div className="serviting_sect">
            <h2>Best in-class</h2>
            <h2 className="design_web">website designing</h2>
            <h2>Services</h2>
            <p>
              We are here to understand you first and then build your dream
              website.
            </p>
          </div>
        </div>
        <div className="services_solutions">
          <div className="services_head">
            <div id="punch1" onClick={tabAnother1} className="ecom_sot">
              <h2 className="fa1 ">01</h2>
              <h3 id="tace1">ECommerce Solution</h3>
            </div>
            <div id="punch2" onClick={tabAnother2} className="ecom_sot">
              <h2 className="fa2">02</h2>
              <h3 id="tace2">Mobile App Development</h3>
            </div>
            <div id="punch3" onClick={tabAnother3} className="ecom_sot">
              <h2 className="fa3">03</h2>
              <h3 id="tace3">Website Development</h3>
            </div>
            <div id="punch4" onClick={tabAnother4} className="ecom_sot">
              <h2 className="fa4">04</h2>
              <h3 id="tace4">UI/UX Design</h3>
            </div>
            <div id="punch5" onClick={tabAnother5} className="ecom_sot">
              <h2 className="fa5">05</h2>
              <h3 id="tace5">Digital Marketing</h3>
            </div>
          </div>
          {fat === 1 && (
            <>
              <div className="service_body">
                <div className="body_left">
                  <h1>01</h1>
                  <h3>ECommerce Solution</h3>
                  <div className="botton_line"></div>
                  <div className="alone_para">
                    <div onClick={subMenu1} className="alone_pars">
                      <p id="pehla" className="alone_pat">
                        01
                      </p>
                      <p id="pehla1" className="alone_pat1">
                        Shopify
                      </p>
                    </div>
                    <div onClick={subMenu2} className="alone_pars">
                      <p id="fehla" className="alone_pat">
                        02
                      </p>
                      <p id="fehla1" className="alone_pat1">
                        WooCommerce
                      </p>
                    </div>
                    <div onClick={subMenu3} className="alone_pars">
                      <p id="gehla" className="alone_pat">
                        03
                      </p>
                      <p id="gehla1" className="alone_pat1">
                        BigCommerce
                      </p>
                    </div>
                    <div onClick={subMenu4} className="alone_pars">
                      <p id="hehla" className="alone_pat">
                        04
                      </p>
                      <p id="hehla1" className="alone_pat1">
                        Magento
                      </p>
                    </div>
                    <div onClick={subMenu5} className="alone_pars">
                      <p id="sehla" className="alone_pat">
                        05
                      </p>
                      <p id="sehla1" className="alone_pat1">
                        Wordpress
                      </p>
                    </div>
                  </div>
                  <div className="botton_line1"></div>
                </div>
                {gat === 1 && (
                  <>
                    <div className="body_right">
                      <img src={vectorsIm} alt="gitas" />
                      <button>Shopify</button>
                    </div>
                  </>
                )}
                {gat === 2 && (
                  <>
                    <div className="body_right">
                      <img src={vectorsIm} alt="gitas" />
                      <button>WooCommerce</button>
                    </div>
                  </>
                )}
                {gat === 3 && (
                  <>
                    <div className="body_right">
                      <img src={vectorsIm} alt="gitas" />
                      <button>BigCommerce</button>
                    </div>
                  </>
                )}
                {gat === 4 && (
                  <>
                    <div className="body_right">
                      <img src={vectorsIm} alt="gitas" />
                      <button>Magento</button>
                    </div>
                  </>
                )}
                {gat === 5 && (
                  <>
                    <div className="body_right">
                      <img src={vectorsIm} alt="gitas" />
                      <button>Wordpress</button>
                    </div>
                  </>
                )}
              </div>
              {gat === 1 && (
                <>
                  <div className="service_footer">
                    <p>
                      We are here to understand you first and then to build your
                      dream websites
                    </p>
                  </div>
                </>
              )}
              {gat === 2 && (
                <>
                  <div className="service_footer">
                    <p>
                      We are here to understand you first and then to build your
                      dream websites
                    </p>
                  </div>
                </>
              )}
              {gat === 3 && (
                <>
                  <div className="service_footer">
                    <p>
                      We are here to understand you first and then to build your
                      dream websites
                    </p>
                  </div>
                </>
              )}
              {gat === 4 && (
                <>
                  <div className="service_footer">
                    <p>
                      We are here to understand you first and then to build your
                      dream websites
                    </p>
                  </div>
                </>
              )}
              {gat === 5 && (
                <>
                  <div className="service_footer">
                    <p>
                      We are here to understand you first and then to build your
                      dream websites
                    </p>
                  </div>
                </>
              )}
            </>
          )}

          {fat === 2 && (
            <>
              <div className="service_body">
                <div className="body_left">
                  <h1>01</h1>
                  <h3>Mobile App Development</h3>
                  <div className="botton_line"></div>
                  <div className="alone_para">
                    <div onClick={subMenu11} className="alone_pars">
                      <p id="tub1" className="alone_pat">
                        01
                      </p>
                      <p id="sub1" className="alone_pat1">
                        i Phone
                      </p>
                    </div>
                    <div onClick={subMenu22} className="alone_pars">
                      <p id="tub11" className="alone_pat">
                        02
                      </p>
                      <p id="sub11" className="alone_pat1">
                        Android
                      </p>
                    </div>
                    <div onClick={subMenu33} className="alone_pars">
                      <p id="tub111" className="alone_pat">
                        03
                      </p>
                      <p id="sub111" className="alone_pat1">
                        React Native
                      </p>
                    </div>
                    <div onClick={subMenu44} className="alone_pars">
                      <p id="tub1111" className="alone_pat">
                        04
                      </p>
                      <p id="sub1111" className="alone_pat1">
                        Fluter
                      </p>
                    </div>
                    <div onClick={subMenu55} className="alone_pars">
                      <p id="tub11111" className="alone_pat">
                        05
                      </p>
                      <p id="sub11111" className="alone_pat1">
                        Kotlin
                      </p>
                    </div>
                  </div>
                  <div className="botton_line1"></div>
                </div>
                {sat === 1 && (
                  <>
                    <div className="body_right">
                      <img src={vectorsIm} alt="gitas" />
                      <button>i Phone</button>
                    </div>
                  </>
                )}

                {sat === 2 && (
                  <>
                    <div className="body_right">
                      <img src={vectorsIm} alt="gitas" />
                      <button>Android</button>
                    </div>
                  </>
                )}

                {sat === 3 && (
                  <>
                    <div className="body_right">
                      <img src={vectorsIm} alt="gitas" />
                      <button>React Native</button>
                    </div>
                  </>
                )}

                {sat === 4 && (
                  <>
                    <div className="body_right">
                      <img src={vectorsIm} alt="gitas" />
                      <button>Fluter</button>
                    </div>
                  </>
                )}

                {sat === 5 && (
                  <>
                    <div className="body_right">
                      <img src={vectorsIm} alt="gitas" />
                      <button>Kotlin</button>
                    </div>
                  </>
                )}
              </div>
              {sat === 1 && (
                <>
                  <div className="service_footer">
                    <p>
                      We are here to understand you first and then to build your
                      dream websites
                    </p>
                  </div>
                </>
              )}
              {sat === 2 && (
                <>
                  <div className="service_footer">
                    <p>
                      We are here to understand you first and then to build your
                      dream websites
                    </p>
                  </div>
                </>
              )}

              {sat === 3 && (
                <>
                  <div className="service_footer">
                    <p>
                      We are here to understand you first and then to build your
                      dream websites
                    </p>
                  </div>
                </>
              )}

              {sat === 4 && (
                <>
                  <div className="service_footer">
                    <p>
                      We are here to understand you first and then to build your
                      dream websites
                    </p>
                  </div>
                </>
              )}

              {sat === 5 && (
                <>
                  <div className="service_footer">
                    <p>
                      We are here to understand you first and then to build your
                      dream websites
                    </p>
                  </div>
                </>
              )}
            </>
          )}

          {fat === 3 && (
            <>
              <div className="service_body">
                <div className="body_left">
                  <h1>01</h1>
                  <h3>Website Development</h3>
                  <div className="botton_line"></div>
                  <div className="alone_para">
                    <div onClick={subMenu111} className="alone_pars">
                      <p id="pub1" className="alone_pat">
                        01
                      </p>
                      <p id="gub1" className="alone_pat1">
                        Wordpress
                      </p>
                    </div>
                    <div onClick={subMenu222} className="alone_pars">
                      <p id="pub11" className="alone_pat">
                        02
                      </p>
                      <p id="gub11" className="alone_pat1">
                        PHP
                      </p>
                    </div>
                    <div onClick={subMenu333} className="alone_pars">
                      <p id="pub111" className="alone_pat">
                        03
                      </p>
                      <p id="gub111" className="alone_pat1">
                        HTML5
                      </p>
                    </div>
                    <div onClick={subMenu444} className="alone_pars">
                      <p id="pub1111" className="alone_pat">
                        04
                      </p>
                      <p id="gub1111" className="alone_pat1">
                        Vue.js
                      </p>
                    </div>
                    <div onClick={subMenu555} className="alone_pars">
                      <p id="pub11111" className="alone_pat">
                        05
                      </p>
                      <p id="gub11111" className="alone_pat1">
                        Node.js
                      </p>
                    </div>
                  </div>
                  <div className="botton_line1"></div>
                </div>
                {rat === 1 && (
                  <>
                    <div className="body_right">
                      <img src={vectorsIm} alt="gitas" />
                      <button>Wordpress</button>
                    </div>
                  </>
                )}

                {rat === 2 && (
                  <>
                    <div className="body_right">
                      <img src={vectorsIm} alt="gitas" />
                      <button>PHP</button>
                    </div>
                  </>
                )}

                {rat === 3 && (
                  <>
                    <div className="body_right">
                      <img src={vectorsIm} alt="gitas" />
                      <button>HTML5</button>
                    </div>
                  </>
                )}

                {rat === 4 && (
                  <>
                    <div className="body_right">
                      <img src={vectorsIm} alt="gitas" />
                      <button>Vue.js</button>
                    </div>
                  </>
                )}

                {rat === 5 && (
                  <>
                    <div className="body_right">
                      <img src={vectorsIm} alt="gitas" />
                      <button>Node.js</button>
                    </div>
                  </>
                )}
              </div>

              {rat === 1 && (
                <>
                  <div className="service_footer">
                    <p>
                      We are here to understand you first and then to build your
                      dream websites
                    </p>
                  </div>
                </>
              )}

              {rat === 2 && (
                <>
                  <div className="service_footer">
                    <p>
                      We are here to understand you first and then to build your
                      dream websites
                    </p>
                  </div>
                </>
              )}

              {rat === 3 && (
                <>
                  <div className="service_footer">
                    <p>
                      We are here to understand you first and then to build your
                      dream websites
                    </p>
                  </div>
                </>
              )}

              {rat === 4 && (
                <>
                  <div className="service_footer">
                    <p>
                      We are here to understand you first and then to build your
                      dream websites
                    </p>
                  </div>
                </>
              )}

              {rat === 5 && (
                <>
                  <div className="service_footer">
                    <p>
                      We are here to understand you first and then to build your
                      dream websites
                    </p>
                  </div>
                </>
              )}
            </>
          )}

          {fat === 4 && (
            <>
              <div className="service_body">
                <div className="body_left">
                  <h1>01</h1>
                  <h3>UI/UX Design</h3>
                  <div className="botton_line"></div>
                  <div  className="alone_para">
                    <div onClick={subMenu1111} className="alone_pars">
                      <p id="mub1" className="alone_pat">
                        01
                      </p>
                      <p id="nub1" className="alone_pat1">
                        Figma
                      </p>
                    </div>
                    <div onClick={subMenu2222} className="alone_pars">
                      <p id="mub11" className="alone_pat">
                        02
                      </p>
                      <p id="nub11" className="alone_pat1">
                        Adobe XD
                      </p>
                    </div>
                    <div onClick={subMenu3333} className="alone_pars">
                      <p id="mub111" className="alone_pat">
                        03
                      </p>
                      <p id="nub111" className="alone_pat1">
                        Sketch
                      </p>
                    </div>
                    <div onClick={subMenu4444} className="alone_pars">
                      <p id="mub1111" className="alone_pat">
                        04
                      </p>
                      <p id="nub1111" className="alone_pat1">
                        Affinity
                      </p>
                    </div>
                   
                  </div>
                  <div className="botton_line1"></div>
                </div>
                {lat === 1 && (
                  <>
                    <div className="body_right">
                      <img src={vectorsIm} alt="gitas" />
                      <button>Figma</button>
                    </div>
                  </>
                )}
                {lat === 2 && (
                  <>
                    <div className="body_right">
                      <img src={vectorsIm} alt="gitas" />
                      <button>Adobe XD</button>
                    </div>
                  </>
                )}
                {lat === 3 && (
                  <>
                    <div className="body_right">
                      <img src={vectorsIm} alt="gitas" />
                      <button>Sketch</button>
                    </div>
                  </>
                )}
                {lat === 4 && (
                  <>
                    <div className="body_right">
                      <img src={vectorsIm} alt="gitas" />
                      <button>Affinity</button>
                    </div>
                  </>
                )}
              
              </div>
              {
                lat === 1 && (
                  <>
                  <div className="service_footer">
                <p>
                  We are here to understand you first and then to build your
                  dream websites
                </p>
              </div>
                  </>
                )

              }
              {
                lat === 2 && (
                  <>
                  <div className="service_footer">
                <p>
                  We are here to understand you first and then to build your
                  dream websites
                </p>
              </div>
                  </>
                )

              }
              {
                lat === 3 && (
                  <>
                  <div className="service_footer">
                <p>
                  We are here to understand you first and then to build your
                  dream websites
                </p>
              </div>
                  </>
                )

              }
              {
                lat === 4 && (
                  <>
                  <div className="service_footer">
                <p>
                  We are here to understand you first and then to build your
                  dream websites
                </p>
              </div>
                  </>
                )

              }

            </>
          )}

          {fat === 5 && (
            <>
              <div className="service_body">
                <div className="body_left">
                  <h1>01</h1>
                  <h3>Digital Marketing</h3>
                  <div className="botton_line"></div>
                  <div className="alone_para">
                    <div onClick={subMenu11111} className="alone_pars">
                      <p id="pun1" className="alone_pat">
                        01
                      </p>
                      <p id="gun1" className="alone_pat1">
                        SEO
                      </p>
                    </div>
                    <div onClick={subMenu22222} className="alone_pars">
                      <p id="pun11" className="alone_pat">02</p>
                      <p id="gun11" className="alone_pat1">SMO</p>
                    </div>
                    <div onClick={subMenu33333} className="alone_pars">
                      <p id="pun111" className="alone_pat">03</p>
                      <p id="gun111" className="alone_pat1">PPC</p>
                    </div>
                    {/* <div className="alone_pars">
                      <p className="alone_pat">04</p>
                      <p className="alone_pat1">Magento</p>
                    </div>
                    <div className="alone_pars">
                      <p className="alone_pat">05</p>
                      <p className="alone_pat1">Wordpress</p>
                    </div> */}
                  </div>
                  <div className="botton_line1"></div>
                </div>
                {
                  pat === 1 && (
                     <>
                     <div className="body_right">
                  <img src={vectorsIm} alt="gitas" />
                  <button>SEO</button>
                </div>
                     </>
                  )
                }

                {
                  pat === 2 && (
                     <>
                     <div className="body_right">
                  <img src={vectorsIm} alt="gitas" />
                  <button>SMO</button>
                </div>
                     </>
                  )
                }

                {
                  pat === 3 && (
                     <>
                     <div className="body_right">
                  <img src={vectorsIm} alt="gitas" />
                  <button>PPC</button>
                </div>
                     </>
                  )
                }
              
              </div>
               {
                pat === 1 && (
                  <>
                  <div className="service_footer">
                <p>
                  We are here to understand you first and then to build your
                  dream websites
                </p>
              </div>
                  </>
                )
               }

               {
                pat === 2 && (
                  <>
                  <div className="service_footer">
                <p>
                  We are here to understand you first and then to build your
                  dream websites
                </p>
              </div>
                  </>
                )
               }

               {
                pat === 3 && (
                  <>
                  <div className="service_footer">
                <p>
                  We are here to understand you first and then to build your
                  dream websites
                </p>
              </div>
                  </>
                )
               }
            
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Services1;
