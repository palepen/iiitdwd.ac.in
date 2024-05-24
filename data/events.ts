export type eventInf = {
  id: number;
  href: string;
  text: string;
  timestamp: string;
  allImage: string[];
  details: {
    startDate: string;
    endDate: string;
    ticketPrice: string;
  };
  venue: {
    place: string;
    street: string;
    city: string;
  };
  organiser: {
    name: string;
    designation: string;
    contact: string;
  };
  aboutEvent : string;
};

let events: eventInf[] = [
  {
    id: 1,
    href: "https://cdn.pixabay.com/photo/2023/08/11/04/51/fireworks-8182800_1280.jpg",
    text: "Event Name",
    timestamp: "17-02-2023",
    allImage: [
      "https://www.adobe.com/content/dam/www/us/en/events/overview-page/eventshub_evergreen_opengraph_1200x630_2x.jpg",
      "https://cdn.pixabay.com/photo/2023/08/11/04/51/fireworks-8182800_1280.jpg",
    ],
    details: {
      startDate: "23-03-2023",
      endDate: "23-03-2023",
      ticketPrice: "23-03-2023",
    },
    venue: {
      place: "iiit",
      street: "sattur",
      city: "dharwad",
    },
    organiser: {
      name: "ds",
      designation: "ce",
      contact: "493349",
    },
    aboutEvent:
      "This is where the main content will go. You can add any text, images, or other elements here.",
  },
  {
    id: 2,
    href: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxETEhUSEhMWFhUXGBgaFxYWFxoYGBkXFhYYFxsXFRkaHSggGholGxcYITEhJSkrLi4uFx8zODMtNygtLysBCgoKDg0OGBAQFisdHx81Li03LS0tKy0vLS0rKy0sLSsrLS0rLi0tNS0rLS0tMisuNy03Ky0tLSsrNys3KysrK//AABEIAOMA3gMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAwQBAgUIBgf/xABKEAABAwICBAgJCgQFBAMAAAABAAIRAyEEMQUSQVETFCJSYXGRoQYjMnOBkrLR8DRCU2JyorHBwtIkk9PxFRdUguEHM2OjFkNE/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECBAMF/8QAHBEBAQEAAwEBAQAAAAAAAAAAAAECAxEhMUEE/9oADAMBAAIRAxEAPwD4lERUEU2FwrqmtqizGl73bGtbmT+HSSAquEo1a08GCYyAkdpG3oWbqRrObfiRFPhvBfFvbrFhi++bWtHV+KhxmCq0I4QEdLpg9XSpNxq8eowizCwtvNh2S9N6E+T0fNU/YC8yOyXpvQnyej5qn7AQXURFAREQEREBERAREQEREBERAREQEREHlhEWCqPqtJ4B2H0Y2BBxBpuqO3AlzmN7I9LjvVzwLbQZSpjWYC4NMFwBkgb1c8N8YH4F1Km5hLaTdcEi+ozXGp9YODSOpVdFaCbwVMhw1Axst1W3IbeSRN7di59+ur+fv3p91w1Om0FzmNbvJAHeuRp7EYWth6hYab9VpJ1YJG2YWW4IVaFJpAkCRO6bd1lNhNDhjSajy+xA1gJg53AWXTqV+QVajddzWm0Wtt5JkD0wtVLpPRLqdHh2yHOrFrbSQ1kyQMjeOwb1ETtXvhwck6rDsl6a0Of4aj5pnsBeZXZL03oX5NR81T9gLbzfL1PCKq2jotzqoDq7aLqshvjA8UWODRFjrVw/k7GHZK5VbwjxurVipUkVeTDKOvq/xnkSNU0/EM8rlcl+8T1MHjsIHso08GxrLtMaoDZq1mtAbFwXYKTlEMz2VX+E+C4IVhhGuaTBILDDuKnEwTHOxD6f2qjt5UHc0LjcQ/FVGPeDSbSp1G6oHK4cNDRlMNdRrHpFUTkvpF8s3TTWPq8HhhrMfRw4Ic1pc4uDWMfaWNAq6wsZBJG5baN8MGVqtGkKThwrKT2uJGVWhUrZb2hjQfOBB9OiIgIiICIiD8qq+EGN47qCrV4fjfB8VgcHxbW8vV1fJ1IPCa0zNoX6DUruDjyyBPNm2sbW6l+c1fCrH/4gGNqiRiDSdgywA8Frw17LS4GnLy+RB2asT+nGq+T4vKYMi+cdSCscQ8f/AGTNx4veJvB+IO5WjTq7HjLa3b25LHC1Pou8dP8Ax2qXDuJHKZq3ysUEZpVdjwP9szn09I7E4Krbljp5P4Cc/erWqNyao3IIKDagPKcCOgR8bVYWNUbkAQeWURFRAaRL5IaKdpG02gkfjey+78HNKfwmoAS4AsPQG2k7co7V8TUbIiYO/cttGaRdhKrS0ucx13yIE5bJhY5Myzz69eDkude/H6fo/SFQahfBDRADQQT1cldbSekooGplDTY2uN6+cw/hfQY0v1pJFmg2BXy2kfCJ+JGrrardblbtWZsNpXhO3dvkz+OTpLTlWo+lSDIZTBbbneU9zrZkkdgzWiOA1nETBcTfpNh2Qi6ZJHztW291h2S9MaJP8LRvHimX3cgXXmd2S9NaGE4aj5qn7AVZfPUNCYdr6b+MklvlAhvLeHV3A5cnlYipYbm7r16ngrhHUH4fhzBbqkgNkFuHpYbWGyQabXdZX1/EqXMb6o+NqzxOnfkNvOwbTJ71B83itFUnvfW40Q48G5h1WnUFKrwrQbctodIAOQcRtlSaK8GqDX0KlOo5xw4a1uVwMOKMO6xqutuXfOCp8xvYFLTpNbkAJzhBuiIgIiICIiD8uf4V1xi/+83heM8BxLgRPBcNqa3Cxraxp+MmYvuX6M7EET4t1pyi8elS8VZr8JqN14jWga0btbOFMgpjEnbSf3e9BijMcE/u96uIgqDEn6N/d71aAWUQY1UAWUQeWFglZXY0dp91Jgp6gcBleMy+ZteQ8CPqhUcaQkr6V3hYTY4dhEzdxm+4x1Z7Qq9HwjLWsYKQIYzUguMOEMEuEZ8jvKDgajdw7FuuhpfSfDlp1AyC42MjlauQgRcdd+gLnoCIiDDsl6b0J8no+ap+wF5kdkvTGinEYWkQJIosgbzqCyDoIvmaPhNXcWTgqgDiJMu5MlouNTIAk9TelSVPCGuDbCOIiSdY2ygeRc3ItzSoPokXzP8A8mr/AOjft+c60BpgxTJvJA+yvoqFTWaHREgGM4kZIJEREBERAREQEREBERAREQEREHlhdDCYSg5gL6/Bu2gtLtpFoytBzvPQuerOFx76Y1WkRJJBAOcb/st7AqLLMFh9uI2kCGGIAPKPRlbpzzWmNwlBrZp1td0+TqEWvtO62wbVp/idSQeTa4tEEiJEdHeAUGk6gLiDBcZMdUej/gIKZCKXE4l1QguzAjvLvxJUSAiIgw7JemtDD+Go+ap+wF5ldkvTGiROFo+aZ0fMCCQNH0zu1uW/yVjkxPDOjfLNl+buVHiLAL0Gxsl9gNUiGz0E2sgwTJJFIWJOtwkHoMzn17lB0hhz9I/7v7Vni5+kf939qzgjyANXVAAAEzAAsp0FZ1EjOq/7v7Vrqi/jnWsbssTv5NlV03oqjXdhzVaSaVYVGQ4iHta4gmDe4Fit61PDlz9aNYiHySJkC27IDLcgmtE8M6N8sjt1Vtwe3hXx/t25fNVSlg8KDyQ0E7nHYJ2G3kyo+JYPPVZ2n3/EdCDocCfpH/d/as8XP0j/ALv7VSwmGwrHAsDdabcqTLpFr9JH9ldOMpi2sLSM92aBxc/SP+7+1OLn6R/3f2rJxjIB1hBkA74WBjafPb2hA4ufpH/d/anFz9I/7v7Vk4tljrC+V84ssccZzhs277/ggcXP0j/u/tTi5+kf939qcdp84dvoQ4ynnrDbt3GLb0Di5+kf939qlpMIzcT1x+QCyxwIBGRWyDywuzovFuFONXDkNNuFHKsS4kXuOVHpttXGV/CaIq1Wh1MNdMgDWEyDBEHdLT1PHTFHTbiXzIp4PWMiRszJMztyk7I334+kq+vUJ1WN6KYhpO8dcqzS0BiXCQwRyvnN+b6d9h0gqli8K+m7UeIdYxIOfSLIIUREBERBh2S9NaFH8NR81T9gLzK7Jem9CfJ6PmqfsBBIMDTiItnmdk9PSsswbACAM87nqVhFBVOj6XN/FWGMAAAyGS2RBBic6f2/0PUFelULrNpxsJzy+O5T4nOn9v8AQ9R1KtQEwGkbLwYjagiNCrzaXYc+y1lNQoH5zWdGqPeoxXqzcNiRfW2Tc9iyKlbmtjry9/cgnGGZzR2BZNBvNHYNqhFStHktm23O4nqtK1dVrbGN9b4+IQWOLs5o7AgwzOaOwKDha3Mb6yNq1trBkcjt2BBPxdnNHYFk0G80dgUAqVuY3Z87rm/YtTVrc1vrILHF2c0dgTgG80dg61DTqVpu1sTeDkPzWBUrRdrZt86NlzkeiyC21oAgZLKhwznkcsAHoM2UyDywrWFq0gCKlMuvMh0HdEeknsVVdXAU6DqfLo1XESC6m4XMkgap6CJPRlmVRWNeh9B/7D7lXxDmlxLW6otAmYgAZ7d66mIbhWlpdRrtBMkEgWDSIaSbnWIJ6O+Cu/Cap1G1g7VtJbBdvN8tkD+4c5ERAREQYdkvTehPk9HzVP2AvMjsl6b0J8no+ap+wEF1ERQEREEGJzp/b/Q9aVMDTcdYiT1ndG9b4nOn9v8AQ9aVMEwkuMyc4JGyPjrKDV2ApbQMt5yz3qajh2t8kQojgWQBe1xfq39Qt0JxFkASbZX6/eUFpZVTiDPresfiE4kyIvHWen3lBalJVU4Fls7dJ6fesHAM+t2nfMdCC2iqHAM+t2n4+DvK3Zg2gyC6es9PvQWUWJWUBERB5YUtKq8eSXATNiQJG2yiW7abiLAnqBVG1erUeZeXE9M7c1HqncVuKD+a7sO3+xUcoM6p3FNU7isSkoM6p3FNU7isSkoDmGMj2L01oT5PR81T9gLzI42XpvQnyej5qn7AUF1ERAREQQYnOn9v9D1HUwQLi7WeCdxj429pUmJzp/b/AEPVKu5uufGOBkWAsJAEbv7lBZGC+u/1srRZBgRz3zv1r/gqvDtkeNdmLavaMto7JCCqI/7r9g8k5mYOW4ILIwH/AJKm3528z8daHAZ8upf63/CqMrNt41xE807CLb04Vt/Gv9U5xG70oLnE7Aa77Tkero2QsOwIIjXfED524QsCi53KbUMG+QNjsCzxV/0ju7cg2GDtGu/bt3iNyNwX13+t0QsDCuv4x3d0e7vWOKviBUOecbNyBxDbrvn7SsUGFrQCSY2nMqsMI/6R0nb7tyzxR0EcI64jZ8SguIqfFXyPGOiNw9CtU2wAM+neg8tLr6O8Iq1GmKbAyASZIMySTscN/cuQrFGlSI5VQtP2S68ndlAg+lUdKn4T1wXGGcprWkQ6IYXkRyp+ee5cVXeBw9vGk3vDCIF4Nx9nvWtSjR5UVSbS3kG55XJO75t+koKiK6aGH+mP8s5bNqxUoUNlYm/MOUgXy2SfQgporow9DbWP8s++xUNenTAljyTrHklpHJkwScpgC3SgruyXpvQnyej5qn7AXmR2S9N6E+T0fNU/YCC6iIoCIiCDE50/t/oetH4ym0kEwZjuB/Nb4nOn9v8AQ9R1KdQusWxO68Wn8EGRjaWxw9CHHU+cojRrb2Dpg71twNSBGoPRbM/lHegk45TidYR+eaDGUud+OUkT1SFDwNXezs+PzW3BVPqZAZbZzNsuhBvx6lzgsnG04nW+PghQ8BV3sy2t2+hWKDDHKAnoCDUY6nlrbYQ46nnrDb3ZqfgxuHYsGk3cOxBBx+nnrfituO04nWEfHuU3BjcOxNQbkFf/ABClzvx7u7tCnpVQ4SLhZ4Mbh2LICDyyulgRU1Rq8HlcOiSHPkh07Jp+gHpXNXQwQYWgGg55nymkxnbonZ1Kiw6pWBdrcDPJN9UjPVsctmU9XQp8PExSDTytU6sXawAxsMAW6TvUJZTIhtCpJyIJP5HYRvzW4p0pvh6otkJN/wAvjO6CXXqm8UZOtmGzaZJ7O/rjOpXsIotzNiGky0i5adzrHqVRrKbRLqD8zmSBa8egZ+j078FTkDi9Ses3IgTlvI7emEE5dWmdWhcgTDfncnZsznr3EKjjcU4ywtpjK7GgbBtHx2Ky6jTseL1bztOQOy17fn6KmNYAGxTczpdN5iInqPegqOyXprQp/hqPmqfsBeZXZL0zogfw1G0+KZb/AGBBYGNpfSM9YI7F0xm9tvrDYSPxB7Cuf/h4gzRYDbImDYgnMQO+62bo5sEmkyYO+5MzJnI7d8lQdKlVa67SDBixm+5brn0Kb2NIYxovNjYkxJN7GOv07bFA1J5URGzOe3JBjGVAHUpIEvgSczqPsN5W7sXTBIL2gi5EiQN57FS0xoyjWdQNVgcadUPZJPJe1riDY3uBY7ljEswxeddrdfaSL5AZ9Qb3b0F8YlkkawkRInKRI7kGIZzh2+lc/gsKYOq07MiYAaBHRYC3QFocJg7clnRE9X5dw3IOu0g5LKqUMVSADWkQIAAyGwD8lnj9PnBBaRQU8WxxgGSp0BERAREQEREHlhdDC1AGD+ILDJ5IDiB2bT+Y6SOeutgmVeDbqspPBNg6NYQTnJG89my6oxrNDYGKIGUajr99wsGtAMYp0xbkkTAsJmRu9A3KUUapcXcFSJkEjISA4SRIG0+mFh1GtEcFSBIOQbMQAbzAz677oQa1KjCROJeWmQ6xkNIPdYCI2qOq+xIxJc6DA1XCeiSbSpjhqlQawFFvlCBySbOYRuOVusdK3bTquDXto0QHfVgiDq8raLg2GwlBEHCOTizADbEO2ANsJ/AWEKrpCpMAVjUGdwRB9OZhXMQKsFzqVEBsOkBsgAggCCSBaI61yqr9YkwB0NEDLYNiCN2S9N6E+T0fNU/YC8yOyXpvQnyej5qn7AQXURFAREQQYnOn9v8AQ9Yr1qbSNYgE5T6PeFnE50/t/oetqhZIBiTlMbL27u5BFxilEyNuw7M9nSEdXpWJIuLWuQJm0TGa2LaUXDYHVafesxT3N7tqDSnVpGdUjkiTAyWwq07GRfKbTFtvWtxRZzR2DJDhmH5rexBGKlKZ1mSNsiw+B3LY4tnOHbOcn8ituLM5rewbY9w7EOGZzR2IN6dRrsiD1GVstKdJrfJAHUIW6AiIgIiIPLCv4akwsbrUqhJmHM2wTMTINugeTtm1BX8NVcKcivqmDDL756hKoyW0NtKqPzzzMdezZ2ZdRpRajV6zsg3yHQQpnvIvxoEtu231e47EDoN8VeIECeiCdojr2egIHNojV8TUzBvtaHXFuiRYbll/BQPEPF2lxknkyAQMrGHXP9tcTjKgLYrF1jcbCSQe0AH09ahbpCqDrB5m3cSR+JQTMp0beLqmwvYTGZGdsrKtiWXkNc1piNYdG/btUjNI1RADyIEDLICO2NqjrYp7hDnEi3dIH4ntQQOyXpvQnyej5qn7AXmR2S9N6E+T0fNU/YCC6iIoCIiCDE50/t/oelagwkawE7N+zLsHYmJzp/b/AEPSthmO8od5GcbuoINW4OnEACDmNmc5df5rXiNKchfZ3LH+H0tx7T71s7BUyIjKYuZEoJqRaAGtItkJW4cN6qtwVMEEAiJiCdqOwFI31c9xO26Cy6oBmQOsrZUxo6lEEE5Zk7Pg9qtgoMosSkoMosSkoMoiIPLCyB0jv9ywupozQNauJp6uTTd0eU9zBs3sKo5uqOcO/wByao5w7/cpcbhXUnljokAG0xygCMwN6gQbao5w7/cmqOcO/wBy1RBtqjnDv9yao5w7/ctUQZc0R5Q7/cvTOhPk9HzVP2AvMjsl6b0J8no+ap+wFBdREQEREGlSnJadxnuI/NR1sKHGTMiYIOUx7gp0QVBgBzn+sVvSwgaZBcSd5JyVhEFJujWDIu9Y57+2624gOc6LfONs8u1W0QVDgG85/rFGYACeU687d+atogqHAN3uFosb9ue1ajRzec6N0q6iCqzBACA52zbu61jiDec/1iraIMNFllEQeWFIzEPAgPcANgcQOyVGu/ollTg2ubSovjntc4mHP2C203ziAqOFUqFxlxJO8kk26StV9I9tUtLOLUGi+TI+aBrAmxi0f3XNGg68gEDdmDBiYMZdeVwg5qLpt0FW6IiZnoHZntWrdC1jsHpmN05IOci6I0LWtaATE7j0+myr43AvpRrxee6PeEFV2S9L6L1uK0tXyuBZHXwYjvXmh2S9MaJIGFok5cEyerUCg5Rp6Tgw5sw6J1Bczql0NNhmQFNhaekBVbrvaaUjW8mSI2Q0X1u4DpU9PHYVxADBJOqPF7bdFvKGe9anSOE5o3jxezYckHaRQcUp8xnqj3JxSnzGeqPcgnRcrSeMwlA0m1dRprPFOnyJ1nuyFmmOswFivjMKxxa5rQRnLLZA2MXz7juQdZFyRjcJBdDYET4s5nIeTmjsbhQSHNaCDBlm09Q+OpB1kXOwtTD1DDGsJifIi2W0K1xSnzGeqPcgnRQcUp8xnqj3JxSnzGeqPcgnRQcUp8xnqj3JxSnzGeqPcgnRQcUp8xnqj3JxSnzGeqPcgnRQcUp8xnqj3KSnSa3yQB1AD8EHxn+XmjP9Of51b+otmf8AT/Rg/wDz9tWqfxeiIN/8v9Gf6f8A9tXf9tYf4BaNIji/ZUqA7BmHzs/HeURBH/l9oz/Tn+dW/qLH+X2jPoD/ADq39REQP8vdGfQH+dW/qLP+XmjP9Of51b+oiIMH/p5ov/Tn+dW/qL7LD0g1jWtEBrQANwAgXKIgjeL7e1YjLPtO9EQS0xf43lSoiCKtRa4tLgDqmWzsMESO0rchEQY1UhEQZAWyIgIiICIiAiIgIiIP/9k=",
    text: "Event Name",
    timestamp: "17-02-2023",
    allImage: [
      "https://www.adobe.com/content/dam/www/us/en/events/overview-page/eventshub_evergreen_opengraph_1200x630_2x.jpg",
    ],
    details: {
      startDate: "23-03-2023",
      endDate: "23-03-2023",
      ticketPrice: "23-03-2023",
    },
    venue: {
      place: "iiit",
      street: "sattur",
      city: "dharwad",
    },
    organiser: {
      name: "ds",
      designation: "ce",
      contact: "493349",
    },
    aboutEvent:
      "This is where the main content will go. You can add any text, images, or other elements here.",
  },
  {
    id: 3,
    href: "data:image/jpeg;base64,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",
    text: "Event Name",
    timestamp: "17-02-2023",
    allImage: [
      "https://www.adobe.com/content/dam/www/us/en/events/overview-page/eventshub_evergreen_opengraph_1200x630_2x.jpg",
    ],
    details: {
      startDate: "23-03-2023",
      endDate: "23-03-2023",
      ticketPrice: "23-03-2023",
    },
    venue: {
      place: "iiit",
      street: "sattur",
      city: "dharwad",
    },
    organiser: {
      name: "ds",
      designation: "ce",
      contact: "493349",
    },
    aboutEvent:
      "This is where the main content will go. You can add any text, images, or other elements here.",
  },
  {
    id: 4,
    href: "data:image/jpeg;base64,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",
    text: "Event Name",
    timestamp: "21-02-2023",
    allImage: [
      "https://www.adobe.com/content/dam/www/us/en/events/overview-page/eventshub_evergreen_opengraph_1200x630_2x.jpg",
    ],
    details: {
      startDate: "21-03-2023",
      endDate: "23-03-2023",
      ticketPrice: "23-03-2023",
    },
    venue: {
      place: "iiit",
      street: "sattur",
      city: "dharwad",
    },
    organiser: {
      name: "ds",
      designation: "ce",
      contact: "493349",
    },
    aboutEvent:
      "This is where the main content will go. You can add any text, images, or other elements here.",
  },
];

events.sort();

export { events };