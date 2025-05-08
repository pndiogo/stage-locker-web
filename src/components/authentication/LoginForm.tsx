'use client';

import { Link } from '@tanstack/react-router';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { PasswordInput } from '@/components/ui/password-input';

//Todo: Improve schema with additional validation rules for password
function LoginForm() {
  const { t, i18n } = useTranslation();

  const formSchema = z.object({
    email: z.string().email({ message: t('loginForm.email.invalid') }),
    password: z
      .string()
      .min(6, { message: t('loginForm.password.min') })
      .regex(/[a-zA-Z0-9]/, { message: t('loginForm.password.alphanumeric') })
  });

  type FormSchema = z.infer<typeof formSchema>;

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  i18n.on('languageChanged', () => {
    form.reset();
  });

  async function onSubmit(values: FormSchema) {
    try {
      // Assuming an async login function
      console.log(values);
      toast(
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error('Form submission error', error);
      toast.error(t('loginForm.error.generic'));
    }
  }

  return (
    <div className='flex flex-col min-h-[50vh] h-full w-full items-center justify-center px-4'>
      <Card className='mx-auto w-sm'>
        <CardHeader>
          <CardTitle className='text-2xl'>{t('loginForm.title')}</CardTitle>
          <CardDescription>{t('loginForm.description')}</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
              <div className='grid gap-4'>
                {/* Email Field */}
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem className='grid gap-2'>
                      <FormLabel htmlFor='email'>
                        {t('loginForm.email.label')}
                      </FormLabel>
                      <FormControl>
                        <Input
                          id='email'
                          placeholder={t('loginForm.email.placeholder')}
                          type='email'
                          autoComplete='email'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Password Field */}
                <FormField
                  control={form.control}
                  name='password'
                  render={({ field }) => (
                    <FormItem className='grid gap-2'>
                      <div className='flex justify-between items-center'>
                        <FormLabel htmlFor='password'>
                          {t('loginForm.password.label')}
                        </FormLabel>
                        <Link
                          to='/forgot-password'
                          className='ml-auto inline-block text-sm underline'
                        >
                          {t('loginForm.password.forgot')}
                        </Link>
                      </div>
                      <FormControl>
                        <PasswordInput
                          id='password'
                          placeholder={t('loginForm.password.placeholder')}
                          autoComplete='current-password'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type='submit' className='w-full'>
                  {t('loginForm.submit')}
                </Button>
              </div>
            </form>
          </Form>
          <div className='mt-4 text-center text-sm'>
            {t('loginForm.signupPrompt')}{' '}
            <Link to='/signup' className='underline'>
              {t('loginForm.signupLink')}
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export { LoginForm };
