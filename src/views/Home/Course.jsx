import * as React from "react";
// import Image from 'next/image';
import { Fade } from "react-awesome-reveal";
import about from "../../assets/images/Course/about.png";
import admission from "../../assets/images/Course/admission.png";
import why from "../../assets/images/Course/why.png";

const Course = () => {
  return (
    <div className="relative" id="cook-section">
      <div className="mx-auto max-w-7xl lg:pt-20 sm:pb-24 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5">
          <div className="col-span-6 flex justify-start">
            <img src={about} alt="about" />
          </div>
          <div className="col-span-6 flex flex-col justify-center">
            <Fade
              direction={"up"}
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h3 className="text-3xl lg:text-5xl font-semibold text-black text-start">
                Về trường học chúng tôi
              </h3>
            </Fade>
            <Fade
              direction={"up"}
              delay={1000}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <p className="text-grey md:text-lg font-normal mb-10 text-start mt-2">
                Ngôi trường của chúng tôi được chung tay bởi các giáo viên có
                nhiều năm kinh nghiệm trong và ngoài nước. Với sự liên tục đổi
                mới phương pháp dạy học, tạo môi trường thân thiện, sáng tạo,
                tuy duy và cả các bài học thực tiễn cho học sinh.
              </p>
              <div className="flex align-middle justify-center md:justify-start">
                <button className="text-xl font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-9 mr-6">
                  Tìm hiểu thêm
                </button>
              </div>
            </Fade>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5">
          <div className="col-span-6 flex flex-col justify-center">
            <Fade
              direction={"up"}
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h3 className="text-3xl lg:text-5xl font-semibold text-black text-start">
                Tuyển sinh
              </h3>
            </Fade>
            <Fade
              direction={"up"}
              delay={1000}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <p className="text-grey md:text-lg font-normal mb-10 text-start mt-2">
                {" "}
                Chào đón học sinh từ lớp 1 đến lớp 5, chương trình tiểu học của
                chúng tôi tập trung phát triển toàn diện: tư duy, kỹ năng sống,
                ngôn ngữ và thể chất. Môi trường học tập hiện đại, giáo viên
                giàu kinh nghiệm, sẵn sàng giúp bé tỏa sáng.
              </p>
              <div className="flex align-middle justify-center md:justify-start">
                <button className="text-xl font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-9 mr-6">
                  Đọc thêm
                </button>
              </div>
            </Fade>
          </div>
          <div className="col-span-6 flex justify-start">
            <img src={admission} alt="about" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5">
          <div className="col-span-6 flex justify-start">
            <img src={why} alt="about" />
          </div>
          <div className="col-span-6 flex flex-col justify-center">
            <Fade
              direction={"up"}
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h3 className="text-3xl lg:text-5xl font-semibold text-black text-start">
                Tại sao bạn nên học trên VPBEdu
              </h3>
            </Fade>
            <Fade
              direction={"up"}
              delay={1000}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <p className="text-grey md:text-lg font-normal mb-10 text-start mt-2">
                Học sinh có thể học bất cứ nơi đâu, với bất kỳ giáo viên nào
                trên hệ thống của chúng tôi. Bên cạnh nh giờ học lý thuyết
                chúng, 50% các khoá học là thực hành trong thực tế, vì vậy các
                cháu sẽ có môi trường áp dụng và ghi nhớ lâu.
              </p>
              <div className="flex align-middle justify-center md:justify-start">
                <button className="text-xl font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-9 mr-6">
                  Đọc thêm
                </button>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
