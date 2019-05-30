const stateGame = {
  mangCuoc: [
    {
      id: "bau",
      hinhAnh: "img/tom.PNG",
      diemCuoc: 0
    },
    {
      id: "cua",
      hinhAnh: "img/ca.PNG",
      diemCuoc: 0
    },
    {
      id: "tom",
      hinhAnh: "img/cua.PNG",
      diemCuoc: 0
    },
    {
      id: "ca",
      hinhAnh: "img/ga.PNG",
      diemCuoc: 0
    },
    {
      id: "nai",
      hinhAnh: "img/nai.PNG",
      diemCuoc: 0
    },
    {
      id: "ga",
      hinhAnh: "img/bau.PNG",
      diemCuoc: 0
    }
  ],

  tongDiem: 200,

  xucXac: [
    {
      id: "cua",
      hinhAnh: "img/cua.png"
    },
    {
      id: "cua",
      hinhAnh: "img/cua.png"
    },
    {
      id: "cua",
      hinhAnh: "img/cua.png"
    }
  ]
};

const gamePlayStoreReducer = (state = stateGame, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      let mangCuocUpdate = [...state.mangCuoc];
      let index = mangCuocUpdate.findIndex(item => item.id === action.id);

      let tongDiemUpdate = state.tongDiem;
      if (index !== -1 && tongDiemUpdate > 0) {
        mangCuocUpdate[index].diemCuoc += 10;
        tongDiemUpdate -= 10;
      }

      state.tongDiem = tongDiemUpdate;
      state.mangCuoc = mangCuocUpdate;
      return { ...state };
    }
    case "CHOI_GAME": {
      let mangCuocRandom = [...state.mangCuoc];
      let xucXacUpdate = [...state.xucXac];

      for (let i = 0; i < xucXacUpdate.length; i++) {
        let index = Math.floor(Math.random() * 6);

        xucXacUpdate[i].id = mangCuocRandom[index].id;
        xucXacUpdate[i].hinhAnh = mangCuocRandom[index].hinhAnh;

        state.xucXac = xucXacUpdate;
        state.mangCuoc = mangCuocRandom;
      }
      /////////////////
      // Tính toán tiền
      /////////////////

      let mangCuocRandom2 = [...state.mangCuoc];

      // for (let i = 0; i < xucXacUpdate.length; i++) {
      //   for (let index = 0; index < mangCuocRandom2.length; index++) {
      //     if (
      //       xucXacUpdate[i].id === mangCuocRandom2[index].id &&
      //       mangCuocRandom2[index].diemCuoc > 0
      //     ) {
      //       state.tongDiem += mangCuocRandom2[index].diemCuoc * 2;
      //     }
      //     mangCuocRandom2[index].diemCuoc = 0;
      //   }
      // }

      // cách 2
      // Dựa vào mảng xucXac moi => tinh điểm
      for (let i = 0; i < xucXacUpdate.length; i++) {
        // tìm từng xucxac trong mảng cược
        let xucXac = xucXacUpdate[i];
        let index = mangCuocRandom2.findIndex(item => item.id === xucXac.id);
        if (index !== -1) {
          // khi id xucXac chứa trong mangCuoc
          state.tongDiem += mangCuocRandom2[index].diemCuoc * 2;
          mangCuocRandom2[index].diemCuoc = 0;
        }
      }
state.mangCuoc = [
  {
    id: "bau",
    hinhAnh: "./img/bau.PNG",
    diemCuoc: 0
  },
  {
    id: "cua",
    hinhAnh: "./img/cua.png",
    diemCuoc: 0
  },
  {
    id: "tom",
    hinhAnh: "./img/tom.png",
    diemCuoc: 0
  },
  {
    id: "ca",
    hinhAnh: "./img/ca.png",
    diemCuoc: 0
  },
  {
    id: "nai",
    hinhAnh: "./img/nai.png",
    diemCuoc: 0
  },
  {
    id: "ga",
    hinhAnh: "./../../img/ga.PNG",
    diemCuoc: 0
  }
]
      // reset mangCuoc
      return { ...state };
    }
    default:
  }

  return { ...state };
};

export default gamePlayStoreReducer;
