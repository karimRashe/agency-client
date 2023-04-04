import React from 'react';

import customer1 from '../../assets/images/customer-1.png'
import customer2 from '../../assets/images/customer-2.png'
import customer3 from'../../assets/images/customer-3.png'


const ClientsServices = () => {
    return (
        

        <div>
            <div>
<h3 className=' text-4xl font-bold uppercase text-center pt-24' >Clients Feedback</h3>
</div>
       <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-12 py-24 bg-base-100'>
  


      
         <figure class="  rounded-xl p-8 md:p-0 dark:bg-slate-800 border border-indigo">
        <img class="w-24 h-24 rounded-full mx-auto p-2" src={customer1} alt="" width="384" height="512" />
        <div class="pt-6  text-center ">
          <blockquote>
            <p class="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
              Sarah Dayan
            </div>
            <div class="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure >
         <figure class=" rounded-xl p-8 md:p-0 dark:bg-slate-800 border border-indigo">
        <img class="w-24 h-24  rounded-full mx-auto p-2" src={customer2} alt="" width="384" height="512" />
        <div class="pt-6  text-center">
          <blockquote>
            <p class="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
              Sarah Dayan
            </div>
            <div class="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>
         <figure class="rounded-xl p-8 md:p-0 dark:bg-slate-800 border border-indigo">
        <img class="w-24 h-24  rounded-full mx-auto p-2" src={customer3} alt="" width="384" height="512" />
        <div class="pt-6 text-center ">
          <blockquote>
            <p class="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
              Sarah Dayan
            </div>
            <div class="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>
       </div>
       </div>
    );
};

export default ClientsServices;