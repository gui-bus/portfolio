import { describe, it, expect } from 'vitest';
import { contactSchema } from '@/components/sections/contactForm';

describe('Contact Form Logic', () => {
  it('should validate correct contact data', () => {
    const validData = {
      name: 'John Doe',
      email: 'john@example.com',
      project_type: 'Full-stack',
      budget: 'budget_range_2',
      deadline: 'deadline_2',
      message: 'Hello, I would like to build a new high-performance web application.',
    };

    const result = contactSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('should reject names shorter than 2 characters', () => {
    const invalidData = {
      name: 'J',
      email: 'john@example.com',
      project_type: 'Full-stack',
      budget: 'budget_range_2',
      deadline: 'deadline_2',
      message: 'Hello, I would like to build a new project.',
    };

    const result = contactSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('Min 2 characters');
    }
  });

  it('should reject invalid emails', () => {
    const invalidData = {
      name: 'John Doe',
      email: 'invalid-email',
      project_type: 'Full-stack',
      budget: 'budget_range_2',
      deadline: 'deadline_2',
      message: 'Hello, I would like to build a new project.',
    };

    const result = contactSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('Invalid email');
    }
  });

  it('should reject messages shorter than 10 characters', () => {
    const invalidData = {
      name: 'John Doe',
      email: 'john@example.com',
      project_type: 'Full-stack',
      budget: 'budget_range_2',
      deadline: 'deadline_2',
      message: 'Short',
    };

    const result = contactSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('Min 10 characters');
    }
  });
});
