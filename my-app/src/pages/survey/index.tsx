import { useState } from 'react';
import Header from '../../components/Header';
import router from 'next/router';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import 'animate.css'
import { SeoHead } from '@/components/SeoHead';

const formSchema = z.object({
  impressions: z.string().min(1, {
    message: "必須入力",
  }),
  content: z.string().min(0, {
  }),
})

const Survey = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      impressions: '',
      content: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      const response = await fetch('/api/survey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
  
      if (response.ok) {
        console.log('Survey result created');
        router.push('/thanks');  // 成功した場合に遷移
      }
    } catch (error) {
      console.error('Survey result creation failed:', error);
    }
  }

  return (
    <>
      <SeoHead
        title={"36の質問"}
        titleTemplate={"アンケート回答"}
        description={"36の質問を終えて、このアプリケーションの改善点や、おすすめの話題を共有してもらうためのアンケートページです"}
        keyWords={"アンケート, 36の質問, 関係性, コミュニケーション, パートナー, 友人, 恋人, カップル, 対話, 話題, 提供"}
        ogType={"website"}
        imgUrl={'/36Q.png'}
      />
      { loading && (
        <div className='fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-bgColor'>
          <div className="loader"></div>
        </div>
      )}
      <div className='min-h-screen bg-bgColor flex flex-col'>
        <Header />
        <div className='flex-1 flex items-center justify-center animate__animated animate__fadeIn'>
          <div className='flex items-center justify-center flex-col'>
            <h1 className="text-3xl text-center font-bold text-baseColor">アンケート</h1>
            <div className="mt-8 flex justify-center m-2">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-4">
                  <FormField
                    control={form.control}
                    name="impressions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='text-md'>1. 感想、改善点(必須)</FormLabel>
                        <div>
                          <FormControl>
                            <Input className='bg-white mt-4 p-4  focus-visible:ring-subColor' placeholder="ex. 時間が足りなかった" {...field} />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='text-md'>2. 貴方が思う「こんな話題なら関係性が深まる」を教えてください</FormLabel>
                        <div>
                          <FormControl>
                            <Input className='bg-white mt-4 p-4  focus-visible:ring-subColor' placeholder="ex. 人生で一番つらかった出来事は?" {...field} />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex justify-center mt-8">
                    <Button type="submit" className="bg-baseColor hover:bg-Color">
                      送信する
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Survey;