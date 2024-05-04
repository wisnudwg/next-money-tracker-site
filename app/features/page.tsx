import Image from "next/image";

import FeaturesHeroAnimation from "@/components/client/features-hero-animation";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import add_edit_entry_modal from "@/public/add_edit_entry_modal.png";
import add_entry_btn from "@/public/add_entry_btn.png";
import delete_entry_modal from "@/public/delete_entry_modal.png";
import datepicker from "@/public/datepicker.png";
import rangepicker from "@/public/rangepicker.png";

import daily_1 from "@/public/daily_1.png";

import calendar_1 from "@/public/calendar_1.png";
import calendar_2 from "@/public/calendar_2.png";

import annual_1 from "@/public/annual_1.png";

import chart_1 from "@/public/chart_1.png";

export default function Features() {
  return(
    <section>
      <HeroSection />
      <FeaturesSection />
    </section>
  )
}

function HeroSection() {
  return(
    <FeaturesHeroAnimation />
  )
}

function FeaturesSection() {
  const tabs = [
    {
      value: 'components',
      label: 'Components',
      carousel: [
        {
          img: datepicker,
          size: 500,
          title: 'Date Picker',
          copy: <>Use the <b>Date Picker</b> to select the <b>Day / Month / Year</b> you want (the <b>mode</b> might depend on the page). The <b>Right Arrow</b> and <b>Left Arrow</b> act as shortcuts to move 1 unit (Day / Month / Year)</>,
        },
        {
          img: rangepicker,
          size: 500,
          title: 'Range Picker',
          copy: <>Only available in <b>Chart</b> Page, the <b>Range Picker</b> can be used to select intervals and mode (<b>Day / Month / Year</b>) freely</>,
        },
        {
          img: add_entry_btn,
          size: 500,
          title: 'Add Entry Float Button',
          copy: <>Use the <b>Add Entry floating button</b> to trigger a modal to add entry, defaults to <b>current date and time</b>, which can be adjusted manually if desired so</>,
        },
        {
          img: add_edit_entry_modal,
          size: 500,
          title: 'Add / Edit Entry Modal',
          copy: <>The modal in which you can either input a new entry or modify existing entry, depending on the trigger. There are <b>3</b> types of entry: <b>Expense, Income, Transfer</b></>,
        },
        {
          img: delete_entry_modal,
          size: 500,
          title: 'Delete Entry Modal',
          copy: <>Clicking the <b>Trash</b> icon on an entry will trigger the opening of this modal, which can be used to delete the targeted entry</>,
        },
      ],
    },
    {
      value: 'daily',
      label: 'Daily',
      carousel: [
        {
          img: daily_1,
          size: 900,
          title: 'Daily Page',
          copy: <>In this page, tabular display of <b>daily entries</b> are displayed <b>based on the month of your selection (defaults to current month)</b>. To <b>add new entry</b> to an existing date, click the <b>green circled plus icon on the top of the corresponding date table</b>. To <b>edit an existing entry</b>, click the <b>blue pencil icon of the target entry</b></>,
        },
      ],
    },
    {
      value: 'calendar',
      label: 'Calendar',
      carousel: [
        {
          img: calendar_1,
          size: 900,
          title: 'Calendar Page',
          copy: <>In this page, <b>daily entries in a given month</b> is displayed on <b>calendar</b> format</>,
        },
        {
          img: calendar_2,
          size: 900,
          title: 'Daily Table Drawer',
          copy: <>Clicking on a calendar cell will trigger the opening of a <b>drawer containing entries of the selected date cell</b>. Actions are idential to those in <b>daily table</b></>,
        },
      ],
    },
    {
      value: 'annual',
      label: 'Annual',
      carousel: [
        {
          img: annual_1,
          size: 900,
          title: 'Annual Page',
          copy: <>In this page, <b>annual entries</b> are displayed in <b>tables of Months containing Weeks</b>. Each week row is <b>expandable</b>. Expanding a week row will reveal <b>daily entries within the corresponding week</b></>,
        },
      ],
    },
    {
      value: 'chart',
      label: 'Chart',
      carousel: [
        {
          img: chart_1,
          size: 900,
          title: 'Chart Page',
          copy: <>In this page, <b>incomes and expenses within the selected date-range</b> is <b>summarized</b> into their respective <b>pie chart</b></>,
        },
      ],
    },
  ];
  return(
    <div className="flex justify-center h-screen gap-20 relative">
      <div className="absolute bottom-0 left-0 bg-green-400 w-[300px] h-[300px] blur-[150px]"></div>
      <div className="absolute bottom-0 right-0 bg-green-900 w-[300px] h-[300px] blur-[150px]"></div>
      <div className="">
        <Tabs defaultValue={tabs[0].value}>
          <TabsList className="flex-col lg:flex-row lg:w-[90vw] lg:gap-[10vw] lg:leading-5 bg-white lg:bg-transparent">
            {tabs.map((tab, index) => (
              <TabsTrigger
                key={index}
                className="font-semibold text-[1.5rem] text-green-900 hover:text-green-400 data-[state=active]:bg-green-400 data-[state=active]:text-white transition-all ease-in-out duration-200"
                value={tab.value}
              >{tab.label}</TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((tab, index) => (
            <TabsContent key={index} value={tab.value} className="w-[50vw] mt-10 lg:mt-0 lg:w-fit">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="lg:w-[80vw] relative"
              >
                <CarouselContent>
                  {tab.carousel.map((item, index) => (
                    <CarouselItem key={index} className="mt-20">
                      <div className="flex items-center justify-center gap-10 flex-col lg:flex-row">
                        <div className="lg:w-1/2">
                          <Image src={item.img} alt="" width={item.size} className="float-right" />
                        </div>
                        <div className="text-center lg:text-left lg:w-1/3">
                          <h3 className="font-semibold text-[1.5rem] lg:text-[2rem] mb-5 lg:mb-0">{item.title}</h3>
                          <p className="text-[1rem] lg:text-[1.25rem]">{item.copy}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-[-60px] lg:left-[50vw] top-[30vh] lg:top-[50vh] bg-green-400 scale-125" />
                <CarouselNext className="absolute right-[-60px] lg:right-[25vw] top-[30vh] lg:top-[50vh] bg-green-900 text-green-400 scale-125" />
              </Carousel>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}