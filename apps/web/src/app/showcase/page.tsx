'use client';

import { Button } from '@/components/common';
import Link from 'next/link';

export default function ButtonShowcasePage() {
  const buttonVariants = [
    'primary',
    'primary-light', 
    'secondary',
    'outline',
    'ghost',
    'link',
    'text-link',
    'text-link-gray',
    'destructive',
    'form-submit',
    'multi-action'
  ] as const;

  const buttonSizes = [
    'sm',
    'default',
    'lg', 
    'xl',
    'icon',
    'icon-sm'
  ] as const;

  const buttonIcons = [
    'plus',
    'upload',
    'share', 
    'eye',
    'chevron-down',
    'chevron-up'
  ] as const;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-prussian-blue mb-4">Button Showcase</h1>
          <p className="text-gray-600 mb-6">All available button variants, sizes, and configurations</p>
          <Link href="/dashboard" className="text-prussian-blue hover:underline">
            ← Back to Dashboard
          </Link>
        </div>

        {/* Button Variants */}
        <section className="bg-white rounded-lg p-8 shadow-sm border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Button Variants</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {buttonVariants.map((variant) => (
              <div key={variant} className="space-y-2">
                <Button variant={variant as any} fullWidth>
                  {variant}
                </Button>
                <code className="text-xs text-gray-500 block text-center">variant="{variant}"</code>
              </div>
            ))}
          </div>
        </section>

        {/* Button Sizes */}
        <section className="bg-white rounded-lg p-8 shadow-sm border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Button Sizes</h2>
          <div className="space-y-4">
            {buttonSizes.map((size) => (
              <div key={size} className="flex items-center space-x-4">
                <Button size={size as any}>
                  {size}
                </Button>
                <code className="text-xs text-gray-500">size="{size}"</code>
              </div>
            ))}
          </div>
        </section>

        {/* Button with Icons */}
        <section className="bg-white rounded-lg p-8 shadow-sm border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Buttons with Icons</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-4">Icons Left</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {buttonIcons.map((icon) => (
                  <div key={icon} className="space-y-2">
                    <Button icon={icon as any} iconPosition="left">
                      {icon}
                    </Button>
                    <code className="text-xs text-gray-500 block text-center">icon="{icon}"</code>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-4">Icons Right</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {buttonIcons.map((icon) => (
                  <div key={icon} className="space-y-2">
                    <Button icon={icon as any} iconPosition="right">
                      {icon}
                    </Button>
                    <code className="text-xs text-gray-500 block text-center">iconPosition="right"</code>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Button States */}
        <section className="bg-white rounded-lg p-8 shadow-sm border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Button States</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Button>Normal</Button>
              <code className="text-xs text-gray-500 block text-center">Default state</code>
            </div>
            
            <div className="space-y-2">
              <Button disabled>Disabled</Button>
              <code className="text-xs text-gray-500 block text-center">disabled</code>
            </div>
            
            <div className="space-y-2">
              <Button loading>Loading</Button>
              <code className="text-xs text-gray-500 block text-center">loading</code>
            </div>
            
            <div className="space-y-2">
              <Button fullWidth>Full Width</Button>
              <code className="text-xs text-gray-500 block text-center">fullWidth</code>
            </div>
          </div>
        </section>

        {/* Multi-Action Buttons */}
        <section className="bg-white rounded-lg p-8 shadow-sm border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Multi-Action Buttons</h2>
          <div className="space-y-4">
            <div className="flex space-x-4">
              <Button variant="multi-action">multi-action</Button>
              <Button variant="multi-action" dropdownOpen>multi-action (open)</Button>
            </div>
            <code className="text-xs text-gray-500">variant="multi-action"</code>
          </div>
        </section>

        {/* Combination Examples */}
        <section className="bg-white rounded-lg p-8 shadow-sm border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Combination Examples</h2>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" icon="plus">
                primary + lg + plus
              </Button>
              
              <Button variant="secondary" size="sm" icon="upload" iconPosition="right">
                secondary + sm + upload
              </Button>
              
              <Button variant="outline" icon="eye" loading>
                outline + eye + loading
              </Button>
              
              <Button variant="destructive" size="xl">
                destructive + xl
              </Button>
            </div>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="bg-white rounded-lg p-8 shadow-sm border">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Code Examples</h2>
          <div className="space-y-4">
            <div className="bg-gray-100 rounded p-4">
              <code className="text-sm">
                {`<Button variant="primary" size="lg" icon="plus" fullWidth>`}<br/>
                {`  Add New Item`}<br/>
                {`</Button>`}
              </code>
            </div>
            <div className="bg-gray-100 rounded p-4">
              <code className="text-sm">
                {`<Button variant="multi-action" dropdownOpen={isOpen}>`}<br/>
                {`  Actions`}<br/>
                {`</Button>`}
              </code>
            </div>
            <div className="bg-gray-100 rounded p-4">
              <code className="text-sm">
                {`<Button variant="ghost" loading disabled>`}<br/>
                {`  Processing...`}<br/>
                {`</Button>`}
              </code>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}