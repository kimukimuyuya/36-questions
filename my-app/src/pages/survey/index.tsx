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

const formSchema = z.object({
  content: z.string(),
});

const Survey = () => {
  const [content, setContent] = useState<string>('');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { content: '' },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
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
  }

  return (
    <div className='min-h-screen bg-bgColor'>
      <Header />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>最後に、貴方が思う「こんな話題なら関係性が深まる」を教えていただきたいです</FormLabel>
                <FormControl>
                  <Input placeholder="ex. 人生で一番しんどかった出来事は?" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">送信する</Button>
        </form>
      </Form>
    </div>
  )
}

export default Survey;