import React from "react";

export const Profile = () => {
  return (
    <div className="p-3">
      <div class="flex">
        <div class="flex-initial w-60">
          <img src="src/assets/dell-logo.svg" height={"200"} width={"200px"} />
        </div>
        <div>
          <div class="flex-auto w-80 text-6xl font-bold">
            Dell
            <p class="text-xl font-semibold">https://www.dell.com/en-ph</p>
            <div class="grid grid-cols-4 gap-80 ">
              <div class="text-sm">
                Founded<p>February 1, 1984</p>
              </div>
              <div class="text-sm">
                Workers<p>4000+</p>
              </div>
              <div class="text-sm">
                Location<p>Quezon City</p>
              </div>
              <div class="text-sm">
                Industry<p>Technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <hr></hr>
      <br></br>
      <div class="grid grid-cols-3 gap-4">
        <div class="col-start-1 col-end-3">
          {" "}
          <p class="text-3xl font-bold">Company Profile</p>
          <div class="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
            repudiandae sunt ipsa beatae fuga neque iure. Aut, dignissimos omnis
            iure, nesciunt id maiores eveniet architecto sapiente quidem
            cupiditate est cum. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Dolore repudiandae sunt ipsa beatae fuga neque
            iure. Aut, dignissimos omnis iure, nesciunt id maiores eveniet
            architecto sapiente quidem cupiditate est cum.
            <hr></hr>
            <br></br>
            <p class="text-3xl font-bold">Connect with Us</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
              repudiandae sunt ipsa beatae fuga neque iure. Aut, dignissimos
              omnis iure, nesciunt id maiores eveniet architecto sapiente quidem
              cupiditate est cum. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Dolore repudiandae sunt ipsa beatae fuga neque
              iure. Aut, dignissimos omnis iure, nesciunt id maiores eveniet
              architecto sapiente quidem cupiditate est cum.
            </p>
          </div>
        </div>

        <div class="...">
          <p class="text-3xl font-bold">Skills Expertise</p>
          <div class="grid grid-cols-3 gap-2">
            <div class="...">
              <img src="src/assets/dell-logo.svg" height={"90"} width={"90"} />
            </div>
            <div class=" ...">
              <img src="src/assets/dell-logo.svg" height={"90"} width={"90"} />
            </div>
            <div class="...">
              <img src="src/assets/dell-logo.svg" height={"90"} width={"90"} />
            </div>
            <div class="...">
              <img src="src/assets/dell-logo.svg" height={"90"} width={"90"} />
            </div>
            <div class="...">
              <img src="src/assets/dell-logo.svg" height={"90"} width={"90"} />
            </div>
            <div class="...">
              <img src="src/assets/dell-logo.svg" height={"90"} width={"90"} />
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <hr></hr> <br></br>
      <div class="grid grid-cols-2 gap-6">
        <div class=" ...">
          {" "}
          <div class="text-3xl font-bold">Open Positions</div> <br></br>
          <div class="grid grid-flow-row-dense grid-cols-5 grid-rows-5">
            <div>
              <img src="src/assets/dell-logo.svg" height={"90"} width={"90"} />
            </div>
            <div class=" col-start-2 col-end-5">
              Social Media Assistant <p>Dell - Philippines</p>
              <button class="button ">Full Time</button>
              <button class="button ">Marketing</button>
              <button class="button ">Design</button>
            </div>
          </div>
        </div>
        <div class=" ...">
          Show all jobs
          <img src="src/assets/dell-logo.svg" height={"90"} width={"90"} />
        </div>
      </div>
    </div>
  );
};
