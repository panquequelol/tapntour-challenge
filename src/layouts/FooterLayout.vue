<template>
            <div class="flex w-full  text-black">
                <div class="flex-1 group">
                    <a href="#" 
                       @click="$router.push('/')"
                       class="flex items-end justify-center mx-auto w-full group-hover:text-indigo-500">
                        <span class="pt-1">
                            <div class="flex justify-center items-center" >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            </div>
                            <span class="text-center text-xs">Home</span>
                            <span class="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
                        </span>
                    </a>
                </div>
<!--                
                <div class="flex-1 group">
                    <a href="#" 
                       @click="$router.push('/shop')"
                       class="flex items-end justify-center text-center mx-auto w-full text-gray-900 group-hover:text-indigo-500">
                        <span class="block pt-1">
                           <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                           </svg>
                            <span class="block text-xs pb-2">Shop</span>
                            <span class="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
                        </span>
                    </a>
                </div>
-->      
                 <div class="flex-1 group">
                    <a href="#" 
                       @click="$router.push('/tours')"
                       class="flex items-end justify-center mx-auto w-full  group-hover:text-indigo-500">
                        <span class="pt-1">
                            <div class="flex justify-center items-center" >
                         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                         </svg>
                            </div>
                            <span class="text-center text-xs">Tours</span>
                            <span class="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
                        </span>
                    </a>
                </div>
<!--
                <div class="flex-1 group">
                    <a href="#" 
                       @click="$router.push('/search')"
                    class="flex items-end justify-center text-center mx-auto w-full text-gray-400 group-hover:text-indigo-500">
                        <span class="block pt-1">
                            <div class="pl-1" >
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                             </svg>
                            </div>
                            <span class="block text-xs pb-2">Search</span>
                            <span class="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
                        </span>
                    </a>
                </div>
-->
                <div class="flex-1 group">
                    <a href="#" 
                       @click="$router.push('/guides')"
                       class="flex items-end justify-center mx-auto w-full group-hover:text-indigo-500">
                        <span class="pt-1">
                            <div class="flex justify-center items-center" >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </div>
                            <span class="text-center text-xs">Guides</span>
                            <span class="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
                        </span>
                    </a>
                </div>

                <div class="flex-1 group">
                    <a href="#" 
                       @click="$router.push('/profile')"
                       class="flex items-end justify-center mx-auto w-full group-hover:text-indigo-500">
                        <span class="pt-1">
                            <div class="flex justify-center items-center" >
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                            </div>
                            <span class="text-center text-xs">LogIn</span>
                            <span class="block w-5 mx-auto h-1 group-hover:bg-indigo-500 rounded-full"></span>
                        </span>
                    </a>
                </div>

  </div>
</template>

<script>
export default {
  name: 'FooterScreen',
  props: {
    msg: String
  }
}
</script>
